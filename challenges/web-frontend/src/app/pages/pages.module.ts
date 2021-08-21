import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { UIModule } from '../shared/ui/ui.module';
import { PagesRoutingModule } from './pages-routing.module';
import { AuctionsComponent } from './auctions/auctions.component';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { NgbPaginationModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [AuctionsComponent],
  imports: [
    CommonModule,
    NgbDropdownModule,
    PagesRoutingModule,
    NgbPaginationModule,
    NgbProgressbarModule,
    FormsModule,
    FileUploadModule,
    UIModule,
    LazyLoadImageModule
  ]
})
export class PagesModule { }
