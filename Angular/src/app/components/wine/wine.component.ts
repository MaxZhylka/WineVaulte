import {Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {ShopService, Wine} from "../../services/shop.service";
import {isPlatformBrowser} from "@angular/common";
import {fadeInOut} from "../fade";

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrl: './wine.component.css',
})
export class WineComponent implements OnInit{
  @Input() Wine!:Wine;
  basket:string="../../../assets/img/basket.png";
  color:string="../../../assets/img/";
  noExist:string='../../../assets/img/noExists.png';
     isBrowser: boolean=false;
  constructor(private shopService:ShopService, @Inject(PLATFORM_ID) private platformId: Object) {
  this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit() {
    this.setColor();

  }

 setColor() {
  switch (this.Wine.color) {
    case "Червоне":
      this.color += 'red.png';
      break;
    case "Рожеве":
      this.color += 'pink.png';
      break;
    case "Біле":
      this.color += 'white.png';
      break;
    case "Помаранчиве":
      this.color += 'orange.png';
      break;
    default:
      this.color += 'Unknown';
      break;
  }
}
addToBasket()
{
  if(this.Wine.count>0) {
    this.shopService.basket.push(this.Wine);
    this.shopService.basket.sort((a, b) => a.price - b.price);
  }
}

}
