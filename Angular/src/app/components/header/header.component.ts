import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  basketImg:string="assets/img/basket.png";
  logoImg: string="assets/img/Logo.webp" ;
    activeLink: string = '';

  setActive(link: string): void {
    this.activeLink = link;
  }
}
