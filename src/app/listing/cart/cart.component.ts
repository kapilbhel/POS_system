import { Component, Input, OnInit } from '@angular/core';

export interface Cart {
  product: string;
  price: number;
  quantity: number;
  total: number;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() dataSource: Cart[] = [];

  displayedColumns: string[] = ['product', 'price', 'quantity', 'total'];

  constructor() { }

  ngOnInit(): void {
  }
}
