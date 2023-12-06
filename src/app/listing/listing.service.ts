import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private productsData = [
    {
      "name": "laptop",
      "price": "1300",
      "category": "computers",
      "description": "a classy laptop with 8GB RAM and with superb gaming capacity",
      "image": "https://img.lovepik.com/element/45012/8521.png_860.png"
    },
    {
      "name": "sweater",
      "price": "12",
      "category": "Clothing",
      "description": "woolen sweater for keeping you warm in winters",
      "image": "https://assets.ajio.com/medias/sys_master/root/20220621/PvQf/62b1d93bf997dd03e2930769/-473Wx593H-441140632-pink-MODEL.jpg"
    },
    {
      "name": "tie",
      "price": "10",
      "category": "Clothing",
      "description": "a classy tie for every party",
      "image": "https://cpimg.tistatic.com/05172415/b/4/Neck-Tie.jpg"
    },
    {
      "name": "jacket men",
      "price": "190",
      "category": "Clothing",
      "description": " a classy winter jacket ",
      "image": "https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"
    },
    {
      "name": "jacket women",
      "price": "190",
      "category": "Clothing",
      "description": " a classy winter jacket ",
      "image": "https://sslimages.shoppersstop.com/sys-master/images/hb3/h4f/15727203385374/ALPU58221016-TP_TAUPE.jpg_2000Wx3000H"
    },
    {
      "name": "shoes women",
      "price": "190",
      "category": "Clothing",
      "description": " the pair of shoes for party ",
      "image": "https://m.media-amazon.com/images/I/61AdRxgWufL._AC_UY1000_.jpg"
    },
    {
      "name": "mobile",
      "price": "1100",
      "category": "electronics",
      "description": "the mobile with 8 GB RAM, 13MP camera",
      "image": "https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg"
    },
    {
      "name": "shoes men",
      "price": "110",
      "category": "clothing",
      "description": " the pair of shoes for party",
      "image": "https://m.media-amazon.com/images/I/51pGAGyFEPL._AC_UY1000_.jpg"
    },
    {
      "name": "shoes men",
      "price": "110",
      "category": "clothing",
      "description": " the pair of shoes for party",
      "image": "https://m.media-amazon.com/images/I/51pGAGyFEPL._AC_UY1000_.jpg"
    },
    {
      "name": "laptop",
      "price": "1300",
      "category": "computers",
      "description": "a classy laptop with 8GB RAM and with superb gaming capacity",
      "image": "https://img.lovepik.com/element/45012/8521.png_860.png"
    },
    {
      "name": "sweater",
      "price": "12",
      "category": "Clothing",
      "description": "woolen sweater for keeping you warm in winters",
      "image": "https://assets.ajio.com/medias/sys_master/root/20220621/PvQf/62b1d93bf997dd03e2930769/-473Wx593H-441140632-pink-MODEL.jpg"
    },
    {
      "name": "tie",
      "price": "10",
      "category": "Clothing",
      "description": "a classy tie for every party",
      "image": "https://cpimg.tistatic.com/05172415/b/4/Neck-Tie.jpg"
    },
    {
      "name": "jacket men",
      "price": "190",
      "category": "Clothing",
      "description": " a classy winter jacket ",
      "image": "https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"
    },
    {
      "name": "jacket women",
      "price": "190",
      "category": "Clothing",
      "description": " a classy winter jacket ",
      "image": "https://sslimages.shoppersstop.com/sys-master/images/hb3/h4f/15727203385374/ALPU58221016-TP_TAUPE.jpg_2000Wx3000H"
    },

  ];

  constructor() { }

  getProducts(): Observable<any[]> {
    return of(this.productsData);
  }
}
