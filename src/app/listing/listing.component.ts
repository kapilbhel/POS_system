import { Component, OnInit } from '@angular/core';
import { ListingService } from './listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  productlist: any[] = [];

  constructor(private listingService: ListingService) { }

  ngOnInit(): void {
    this.getshoppinglist()
  }

  getshoppinglist() {
    this.listingService.getProducts().subscribe((res) => {
      console.log(res)
      this.productlist = res;
    })
  }
}
