import {Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {Order, Wine} from "../../services/shop.service";
import {isPlatformBrowser} from "@angular/common";
import {fadeInOut} from "../fade";

@Component({
  selector: 'app-full-order',
  templateUrl: './full-order.component.html',
  styleUrl: './full-order.component.css',
  animations: [fadeInOut]
})
export class FullOrderComponent implements OnInit{
  isBrowser:boolean=false;
  @Output() closeEmit:EventEmitter<void>=new EventEmitter<void>;
  @Input()basketElements!:Order;
    statuses = ['В обробці', 'Доставка', 'Завершене'];
  selectedStatus!: string;
constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

  }
  ngOnInit() {
    this.selectedStatus= this.basketElements.orderInfo.status;
  }

  getWineCounts(): [Wine, number][] {
    const wineMap = new Map<number, [Wine, number]>();

    this.basketElements.wines.forEach((wine) => {
      if (wineMap.has(wine.wine.id)) {
        const [currentWine, currentCount] = wineMap.get(wine.wine.id)!;
        wineMap.set(wine.wine.id, [currentWine, currentCount + 1]);
      } else {
        wineMap.set(wine.wine.id, [wine.wine, 1]);
      }
    });

    return Array.from(wineMap.values());
  }
   getTotalPrice(): number {
    return this.basketElements.wines.reduce((total, wine) => total + wine.wine.price, 0);
  }
  close()
  {
     document.body.style.overflowY = 'scroll';
    this.closeEmit.emit();
  }
   onChange(newStatus: string) {
    this.basketElements.orderInfo.status=newStatus;
  }
}
