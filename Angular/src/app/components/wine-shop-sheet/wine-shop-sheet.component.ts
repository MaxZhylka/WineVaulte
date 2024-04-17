import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {isPlatformBrowser} from "@angular/common";
import {fadeInOut} from "../fade";

@Component({
  selector: 'app-wine-shop-sheet',
  templateUrl: './wine-shop-sheet.component.html',
  styleUrl: './wine-shop-sheet.component.css',
  animations: [
    fadeInOut]
})
export class WineShopSheetComponent {

   isBrowser: boolean=false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
