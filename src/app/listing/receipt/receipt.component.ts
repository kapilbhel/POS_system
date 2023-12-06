import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface ReceiptData {
  cartData: string;
  totalQuantity:number;
  subTotal:number;
  vat:number;
}

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReceiptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReceiptData) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
