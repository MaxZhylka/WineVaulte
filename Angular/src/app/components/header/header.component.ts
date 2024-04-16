import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgModule } from '@angular/core';
import {ShopService, Wine} from "../../services/shop.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

 @ViewChild('searchField') searchField!: ElementRef;
  basketImg:string="assets/img/basket.png";
  logoImg: string="assets/img/Logo.webp" ;
    activeLink: string = 'shop';
    Wines!:Wine[];
    ignoreBlur: boolean= false;
    searchQuery:string="";
    hintMargin={};
    hint:string="";

    searchedWines: Wine[]=[];
    displayBasket:boolean=false;
    constructor(private shopService:ShopService) {
    }
  setActive(link: string): void {
    this.activeLink = link;
  }

  get getCounter()
  {
    return this.shopService.basket.length;
  }
    ngOnInit() {
    this.getWines();

  }

getWines = () => {
    this.shopService.getWines().subscribe({
      next: (data: Wine[]) => {
       this.Wines = data.sort((a, b) => b.count - a.count);;
      },
      error: (error) => {
        console.error('Failed to load wines', error);
      }
    });
  };
    ResetFocus=()=>
{
  if (this.searchField) {
      this.searchQuery="";
      this.hint="";
      this.searchedWines=[];
      this.searchField.nativeElement.blur();
    }
}
  display()
  {
    this.displayBasket=!this.displayBasket;

  }
  openFullWines()
  {
    this.ResetFocus();
  }
  Blur() {
  if (this.ignoreBlur) {

    this.ignoreBlur = false;
    return;
  }

  this.hint = "";
  this.searchedWines = [];
}

suggestWines() {
     if(this.searchQuery=="")
     {
       this.searchedWines=[];
       this.hint="";
       return;
     }
  this.hint = '';
  const searchQueryWidth = document.createElement('span');
  searchQueryWidth.style.visibility = 'hidden';
  searchQueryWidth.style.whiteSpace="pre"
  searchQueryWidth.style.fontSize='28px';
  searchQueryWidth.style.border='none';
  searchQueryWidth.style.fontFamily=" \"Times New Roman\",  sans-serif"
  searchQueryWidth.innerText = this.searchQuery;

  document.body.appendChild(searchQueryWidth);

  const lastLetterWidth = searchQueryWidth.offsetWidth;
  const calcMargin =+  lastLetterWidth;

  this.hintMargin = {
    'margin-left.px': calcMargin
  };
  document.body.removeChild(searchQueryWidth);
  this.searchedWines = this.Wines.filter(wine => wine.name.toLowerCase().startsWith(this.searchQuery.toLowerCase()));
  if (this.searchedWines.length > 0 && this.searchQuery) {
    const matchingCity = this.searchedWines[0].name;
    if (matchingCity.toLowerCase().startsWith(this.searchQuery.toLowerCase())) {
      this.hint = matchingCity.substring(this.searchQuery.length);

    }
  }
}
}
