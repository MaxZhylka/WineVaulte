import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {ShopService} from "../../services/shop.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  basketImg:string="assets/img/basket.png";
  logoImg: string="assets/img/Logo.webp" ;
    activeLink: string = 'shop';
    counter:number= this.getCounter;
    constructor(private shopService:ShopService) {
    }
  setActive(link: string): void {
    this.activeLink = link;
  }
  get getCounter()
  {
    return this.shopService.basket.length;
  }
}
