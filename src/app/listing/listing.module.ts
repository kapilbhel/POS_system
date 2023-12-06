import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { ListingComponent } from './listing.component';
import { CartComponent } from './cart/cart.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ListingComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ListingRoutingModule,
    MatTableModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ListingModule { }
