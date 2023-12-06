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
      "price": "120",
      "category": "clothing",
      "description": "woolen sweater for keeping you warm in winters",
      "image": "https://assets.ajio.com/medias/sys_master/root/20220621/PvQf/62b1d93bf997dd03e2930769/-473Wx593H-441140632-pink-MODEL.jpg"
    },
    {
      "name": "tie",
      "price": "100",
      "category": "clothing",
      "description": "a classy tie for every party",
      "image": "https://cpimg.tistatic.com/05172415/b/4/Neck-Tie.jpg"
    },
    {
      "name": "apple",
      "price": "100",
      "category": "grocery",
      "description": "an apple a day keeps a doctor away",
      "image": "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w="
    },
    {
      "name": "jacket men",
      "price": "2000",
      "category": "clothing",
      "description": " a classy winter jacket ",
      "image": "https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg"
    },
    {
      "name": "jacket women",
      "price": "200",
      "category": "clothing",
      "description": " a classy winter jacket ",
      "image": "https://sslimages.shoppersstop.com/sys-master/images/hb3/h4f/15727203385374/ALPU58221016-TP_TAUPE.jpg_2000Wx3000H"
    },
    {
      "name": "orange",
      "price": "130",
      "category": "grocery",
      "description": "a classy laptop with 8GB RAM and with superb gaming capacity",
      "image": "https://5.imimg.com/data5/SELLER/Default/2020/9/RI/WF/GL/106270270/orange.jpg"
    },
    {
      "name": "shoes women",
      "price": "200",
      "category": "clothing",
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
      "price": "1000",
      "category": "clothing",
      "description": " the pair of shoes for party",
      "image": "https://m.media-amazon.com/images/I/51pGAGyFEPL._AC_UY1000_.jpg"
    },
    {
      "name": "earphones",
      "price": "1000",
      "category": "electronics",
      "description": "a classy earphones",
      "image": "https://www.boat-lifestyle.com/cdn/shop/products/1grn_66029af4-f3d3-4a56-89ab-acf9de85d776.png?v=1613743044g"
    },
  ];

  constructor() { }

  getProducts(): Observable<any[]> {
    return of(this.productsData);
  }
}
