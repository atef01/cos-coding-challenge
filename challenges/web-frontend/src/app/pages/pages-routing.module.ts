import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionsComponent } from './auctions/auctions.component';
const routes: Routes = [
  {path: '', redirectTo: '/auctions', pathMatch: 'full'},
  { path: 'auctions',  component: AuctionsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
