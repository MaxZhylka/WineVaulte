import {Component, EventEmitter, Output} from '@angular/core';
import {ShopService, Wine} from "../../services/shop.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {

  @Output() closeBasket:EventEmitter<void>= new EventEmitter<void>;

  constructor(private shopService:ShopService)
  {}

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
   this.closeBasket.emit();
 }
  confirm()
 {
   this.shopService.wineOrders.push(this.basketsElements);
   this.shopService.basket=[];
   console.log(  this.shopService.wineOrders);
   this.closeBasket.emit();
 }
}
