import { Component, OnInit } from '@angular/core';

export interface Cart {
  name: string;
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

  data: Cart[] = [
    { name: 'sweater', price: 130, quantity: 2, total: 130 },
  ];

  dataSource = this.data;
  displayedColumns: string[] = ['name', 'price', 'quantity', 'total'];

  constructor() { }

  ngOnInit(): void {
  }
}
