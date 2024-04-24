import {Component, EventEmitter, Inject, Output, PLATFORM_ID} from '@angular/core';
import {OrderInfo, ShopService, Wine} from "../../services/shop.service";
import {fadeInOut} from "../fade";
import {isPlatformBrowser} from "@angular/common";
import {FormControl, FormGroup} from "@angular/forms";

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

  constructor(protected shopService:ShopService, @Inject(PLATFORM_ID) private platformId: Object)
  {this.isBrowser = isPlatformBrowser(this.platformId);}

 get basketsElements(): [Wine, number][] {
    const countsMap = new Map<string, number>();
    const pairs: [Wine, number][] = [];
    this.shopService.basket.forEach(wine => {
      const key = wine.wine.name;
      countsMap.set(key, (countsMap.get(key) || 0) + 1);
    });


    countsMap.forEach((count, name) => {
      const winesWithName = this.shopService.basket.filter(wine => wine.wine.name === name);
      const wine = winesWithName[0];
      pairs.push([wine.wine, count]);
    });

    return pairs;
  }
 get totalPrice():number
 {
   let result=0;

   this.shopService.basket.forEach(wine=>
   {
     result+=wine.wine.price*wine.count;
   })
   return result;
 }
 close()
 {

   document.body.style.overflowY = 'scroll';
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

   this.shopService.wineOrders.push( {wines:this.shopService.basket, orderInfo:event});
   this.shopService.basket=[];
   this.close();
 }

}
