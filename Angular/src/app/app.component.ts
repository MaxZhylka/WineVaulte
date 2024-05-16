import {Component, OnInit} from '@angular/core';
import {GuardsCheckEnd, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {WineShopModule} from "./modules/wine-shop/wine-shop.module";
import {AboutUsModule} from "./modules/about-us/about-us.module";

import {provideAnimations} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {filter} from "rxjs";





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WineShopModule, AboutUsModule, CommonModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',


})
export class AppComponent implements OnInit{
  title = 'Винный погреб';
  displayBasket:boolean=false;
  show: boolean=false;
constructor(private router:Router) {
}
  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof GuardsCheckEnd) {
          this.show = !event.url.includes('/help');
        }
      });
  }

  display(event:boolean)
  {
    this.displayBasket=event;
  }
  close()
  {
    this.displayBasket=false;
  }

  }
