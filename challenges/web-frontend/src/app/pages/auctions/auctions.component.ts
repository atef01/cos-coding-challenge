import { Component, OnInit } from '@angular/core';
import { SalesManService } from "src/app/core/services/user.service";
import { Acution } from "src/app/core/models/auctions.models";
import {HttpParams } from '@angular/common/http';
import { User } from 'src/app/core/models/auth.models';
import { AuthenticationService } from "src/app/core/services/auth.service";
import { timer, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss']
})
export class AuctionsComponent implements OnInit {
 // bread crumb items
 breadCrumbItems: Array<{}>;
 user:User;
 term: any;
 auctionsData: Array<Acution> = [];
 loading:boolean = false
 Loadmore:boolean=false;
 haveMore:boolean=false
 offset:number = 0
 limit:number =15
 defaultImage = 'assets/images/defaultImage.jpg';
 subscription: Subscription;
  every15Seconds: Observable<number> = timer(0, 15000);
  constructor(private salesmanservice:SalesManService, private authenticationservice:AuthenticationService) { 
    this.user = this.authenticationservice.currentUser()
  }

  
  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [];

    /**
     * fetches data
     */
    this._fetchData();
    this.subscription = this.every15Seconds.subscribe(() => {
      this._UpdateData();
    });
  }
  ngOnDestroy() {
    if(this.subscription){ this.subscription.unsubscribe();}
   
  }

  OnloadMore(){
    this.Loadmore=true
    this.offset = this.offset + this.limit
    this._fetchData()
  }

  /**
   * fetches product values
   */
  private _fetchData() {
    let params = {"count":false, "limit":this.limit,"offset":this.offset}
    this.loading = true;
    this.salesmanservice.getAuctionAll(this.user.userId, JSON.stringify(params)).subscribe(
        data => {
          console.log(data)
          this.auctionsData = this.auctionsData.concat(data)
          this.convertRemainingTimeInSecondsHMS()
          this.loading = false;
          this.Loadmore = false
          if(data.length >= this.limit){
            this.haveMore = true
          }else{
            this.haveMore = false
          }
        },
        error => {
          this.loading = false;
          this.Loadmore = false
        })
  }
  private _UpdateData() {
    let params = {"count":false, "limit":this.limit +this.offset,"offset":0}
    this.salesmanservice.getAuctionAll(this.user.userId, JSON.stringify(params)).subscribe(
        data => {
          console.log(data)
          this.auctionsData = data
          this.convertRemainingTimeInSecondsHMS()
         // this.auctionsData = data   
        },
        error => {
        })
  }

  convertRemainingTimeInSecondsHMS() {
    this.auctionsData.forEach(element => {
      console.log(element.remainingTimeInSeconds)
      if(element.remainingTimeInSeconds){
        const sec = element.remainingTimeInSeconds // convert value to number if it's string
        let hours   = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
        let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
        // add 0 if value < 10; Example: 2 => 02
        let strhours = hours.toString();
        let strminutes =  minutes.toString();
        let strseconds = seconds.toString();
        if (hours   < 10) {strhours   = `0${hours}`;}
        if (minutes < 10) {strminutes = `0${minutes}`;}
        if (seconds < 10) {strseconds = `0${seconds}`;}
        element.RemainingTimeInSecondsHMS =  `${strhours}h: ${strminutes}m: ${strseconds}s`; 
     }else{
      element.RemainingTimeInSecondsHMS =  "00h:00m:00s"
     }
    
    });
   
 }

}
