import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { ListingComponent } from './listing.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    ListingComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ListingRoutingModule
  ]
})
export class ListingModule { }
