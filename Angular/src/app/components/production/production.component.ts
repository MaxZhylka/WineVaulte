import {Component, Inject, PLATFORM_ID} from '@angular/core';

import {isPlatformBrowser} from "@angular/common";
import {fadeInOut} from "../fade";
@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrl: './production.component.css',
  animations: [
fadeInOut
   ],
  providers: []

})

export class ProductionComponent {
  display:string="stats";
  isBrowser: boolean;
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  setDisplay(event:string)
  {
    if(this.isBrowser) {
      this.display = event;
    }
  }
}
