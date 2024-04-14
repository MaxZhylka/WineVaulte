import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WineShopModule} from "./modules/wine-shop/wine-shop.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WineShopModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Винный погреб';
}
