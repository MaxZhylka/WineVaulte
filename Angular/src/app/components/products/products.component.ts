import {Component, OnInit} from '@angular/core';
import {ShopService} from "../../services/shop.service";
import {Wine} from "../../services/shop.service";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
 Wines:Wine[]=[];
  constructor(public shopService:ShopService) {
  }
  ngOnInit() {
    this.getNews();
    console.log(this.Wines);
  }

  getNews = () => {
  this.shopService.getWines().subscribe({
    next: (data) => {
      this.Wines = data;

    },
    error: (error) => {
      console.log(error);
    }
  });
}
}
