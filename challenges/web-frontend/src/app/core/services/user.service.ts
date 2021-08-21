import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { User, } from '../models/auth.models';
import { Acution } from "../models/auctions.models";
@Injectable({ providedIn: 'root' })
export class SalesManService {
    constructor(private http: HttpClient) { }

    getAuctionAll(email, params) {
        return this.http.get<Array<Acution>>(`${environment.base_url}/auction/salesman/${email}/purchases?filter=${params}`);
    }
}