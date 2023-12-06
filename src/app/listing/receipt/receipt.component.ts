import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
export interface ReceiptData {
  cartData: any[];
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
  }

  close(){
    this.dialogRef.close(this.data)
  }

}
