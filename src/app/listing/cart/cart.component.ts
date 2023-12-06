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

  increaseQuantity(element: Cart): void {
    element.quantity += 1;
    element.total = element.quantity * element.price;
  }

  decreaseQuantity(element: Cart): void {
    if (element.quantity > 1) {
      element.quantity -= 1;
      element.total = element.quantity * element.price;
    }
  }

  removeProduct(element: Cart, index: number): void {
    this.dataSource.splice(index, 1);
    this.dataSource = [...this.dataSource];
  }

}
