import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WineShopModule} from "./modules/wine-shop/wine-shop.module";
import {AboutUsModule} from "./modules/about-us/about-us.module";

import {provideAnimations} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WineShopModule, AboutUsModule, CommonModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'Винный погреб';
  displayBasket:boolean=false;

  display(event:boolean)
  {
    this.displayBasket=event;
  }
  close()
  {
    this.displayBasket=false;
  }

  }
