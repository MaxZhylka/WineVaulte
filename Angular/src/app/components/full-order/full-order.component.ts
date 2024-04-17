import {Component, EventEmitter, Inject, Input, Output, PLATFORM_ID} from '@angular/core';
import {Wine} from "../../services/shop.service";
import {isPlatformBrowser} from "@angular/common";
import {fadeInOut} from "../fade";

@Component({
  selector: 'app-full-order',
  templateUrl: './full-order.component.html',
  styleUrl: './full-order.component.css',
  animations: [fadeInOut]
})
export class FullOrderComponent {
  isBrowser:boolean=false;
  @Output() closeEmit:EventEmitter<void>=new EventEmitter<void>;
  @Input()basketElements!:Wine[];
constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
    getWineCounts(): [Wine, number][] {
    const wineMap = new Map<number, [Wine, number]>();

    this.basketElements.forEach((wine) => {
      if (wineMap.has(wine.id)) {
        const [currentWine, currentCount] = wineMap.get(wine.id)!;
        wineMap.set(wine.id, [currentWine, currentCount + 1]);
      } else {
        wineMap.set(wine.id, [wine, 1]);
      }
    });

    return Array.from(wineMap.values());
  }
   getTotalPrice(): number {
    return this.basketElements.reduce((total, wine) => total + wine.price, 0);
  }
  close()
  {
     if(this.isBrowser) {
      document.body.style.overflowY = 'auto';
    }
    this.closeEmit.emit();
  }
}
