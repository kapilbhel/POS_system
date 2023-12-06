import { Component, OnInit } from '@angular/core';
import { ListingService } from './listing.service';

export interface Cart {
  product: string;
  price: number;
  quantity: number;
  total: number;
}
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  categoryColors: { [category: string]: string } = {
    computers: 'aqua',
    clothing: 'lightcoral',
    grocery: 'lightgreen',
    electronics: 'lightblue'
  };
  productlist: any[] = [];
  dataSource: Cart[] = [];
  constructor(private listingService: ListingService) { }

  ngOnInit(): void {
    this.getshoppinglist();
  }

  getshoppinglist() {
    this.listingService.getProducts().subscribe((res) => {
      this.productlist = res;
    })
  }

  addToCart(product: any): void {
    const existingElementIndex = this.dataSource.findIndex(element => element.product === product.name);
    if (existingElementIndex !== -1) {
      this.dataSource[existingElementIndex].quantity += 1;
      this.dataSource[existingElementIndex].total = this.dataSource[existingElementIndex].quantity * product.price;
    } else {
      const newProduct = {
        product: product.name,
        price: product.price,
        quantity: 1,
        total: product.price
      };

      this.dataSource.push(newProduct);
    }
    this.dataSource = [...this.dataSource];
  }

  handleCancelSale() {
    this.dataSource = [];
  }

  handleRemoveProduct(productToRemove: Cart): void {
    this.dataSource = this.dataSource.filter((item) => item.product !== productToRemove.product);
  }

  handleEmptyCart(): void {
    this.dataSource = [];
  }

}
