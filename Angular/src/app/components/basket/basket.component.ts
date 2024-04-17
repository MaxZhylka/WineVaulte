import {Component, EventEmitter, Inject, Output, PLATFORM_ID} from '@angular/core';
import {OrderInfo, ShopService, Wine} from "../../services/shop.service";
import {fadeInOut} from "../fade";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css',
  animations:[fadeInOut]
})
export class BasketComponent {

  isBrowser:boolean=false;
  display:boolean=true;
  @Output() closeBasket:EventEmitter<void>= new EventEmitter<void>;

  constructor(private shopService:ShopService,@Inject(PLATFORM_ID) private platformId: Object)
  {this.isBrowser = isPlatformBrowser(this.platformId);}

 get basketsElements(): [Wine, number][] {
    const countsMap = new Map<string, number>();
    const pairs: [Wine, number][] = [];
    this.shopService.basket.forEach(wine => {
      const key = wine.name;
      countsMap.set(key, (countsMap.get(key) || 0) + 1);
    });


    countsMap.forEach((count, name) => {
      const winesWithName = this.shopService.basket.filter(wine => wine.name === name);
      const wine = winesWithName[0];
      pairs.push([wine, count]);
    });

    return pairs;
  }
 get totalPrice():number
 {
   let result=0;

   this.shopService.basket.forEach(wine=>
   {
     result+=wine.price;
   })
   return result;
 }
 close()
 {
     if(this.isBrowser) {
      document.body.style.overflowY = 'auto';
    }
   this.closeBasket.emit();
 }
  confirm()
 {
  if(this.shopService.basket.length==0)
  {
    this.close();
    return;
  }
   console.log(  this.shopService.wineOrders);
   this.display=false;
 }
 MergeData(event:OrderInfo)
 {
     if(this.isBrowser) {
      document.body.style.overflowY = 'auto';
    }
   this.shopService.wineOrders.push( {wines:this.shopService.basket, orderInfo:event});
   this.shopService.basket=[];
   this.close();
 }
}
