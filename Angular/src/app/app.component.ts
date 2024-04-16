import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WineShopModule} from "./modules/wine-shop/wine-shop.module";
import {BrowserModule} from "@angular/platform-browser";
import {AboutUsModule} from "./modules/about-us/about-us.module";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WineShopModule, AboutUsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Винный погреб';
}
