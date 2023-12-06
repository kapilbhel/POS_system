import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReceiptComponent } from '../receipt/receipt.component';

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
  @Output() cancelSaleEvent = new EventEmitter<void>();
  
  displayedColumns: string[] = ['product', 'price', 'quantity', 'total'];

  constructor(public dialog: MatDialog) { }

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

  getTotalQuantity(): number {
    return this.dataSource.reduce((acc, element) => acc + element.quantity, 0);
  }

  gettotal(): number {
    return this.dataSource.reduce((acc, element) => acc + Number((element as Cart)?.total || 0), 0);
  }

  getVat(): number {
    return this.gettotal() * 0.1;
  }

  cancelSale() {
    this.dataSource = [];
    this.cancelSaleEvent.emit();
  }

  processSale(): void {
    const dialogRef = this.dialog.open(ReceiptComponent, {
      data: {
        cartData: this.dataSource,
        totalQuantity: this.getTotalQuantity(),
        subTotal: this.gettotal(),
        vat: this.getVat(),
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataSource = [];
    });
  }

}
