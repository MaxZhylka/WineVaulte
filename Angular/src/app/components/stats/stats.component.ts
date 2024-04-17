import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ShopService, Wine } from "../../services/shop.service";
import {id} from "@swimlane/ngx-charts";
import {DiagramService} from "../../services/diagram.service";


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit{
  view: [number, number] = [1200, 600];
  xAxisLabel = 'Вино/Кількість на складі';
  yAxisLabel = 'Кількість пляшок';
  data: any = [];
  Wines!: Wine[];
  displayCircle:boolean=false;
  displayRectangle:boolean=true;

  constructor(private shopService: DiagramService,
               private cdr: ChangeDetectorRef
  ) {

  }
ngOnInit() {
        this.loadWines()
}


  loadWines() {

    this.shopService.getWines().subscribe({
      next: (data: Wine[]) => {
       this.Wines = data.sort((a, b) => a.id - b.id);
        this.data = this.Wines.map(item => ({
          name: item.name,
          value: item.count,

        }));

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Failed to load wines', error);
      }
    });
  }

  displayNamesCounts()
{
  this.displayCircle=false;
  this.displayRectangle=true;
  this.data = this.Wines.map(item => ({
          name: item.name,
          value: item.count,

        }));
  this.xAxisLabel = 'Вино/Кількість на складі';
  this.yAxisLabel = 'Кількість пляшок';
};
 displayColorsSugar() {
      this.displayCircle=false;
  this.displayRectangle=true;
    const colorCount: Record<string, number> = this.Wines.reduce((acc, wine) => {
      if (acc[wine.color]) {
        acc[wine.color] += wine.count;
      } else {
        acc[wine.color] = wine.count;
      }
      return acc;
    }, {} as Record<string, number>);

    this.data = Object.keys(colorCount).map(color => ({
      name: color,
      value: colorCount[color]
    }));
      this.xAxisLabel = 'Колір/Кількість на складі';
  this.yAxisLabel = 'Кількість пляшок';
  }
displayPricesByCountry() {
     this.displayCircle=false;
  this.displayRectangle=true;
  const countryPrice: Record<string, { sum: number, count: number }> = this.Wines.reduce((acc, wine) => {
    if (acc[wine.country]) {
      acc[wine.country].sum += wine.price;
      acc[wine.country].count += 1;
    } else {
      acc[wine.country] = { sum: wine.price, count: 1 };
    }
    return acc;
  }, {} as Record<string, { sum: number, count: number }>);

  this.data = Object.keys(countryPrice).map(country => ({
    name: country,
    value: countryPrice[country].sum / countryPrice[country].count
  }));

  this.xAxisLabel = 'Країна';
  this.yAxisLabel = 'Середня ціна';
}

displayCountryBottles()
{

    this.displayRectangle=false;
    this.displayCircle=true;

  const countryBottleCount: Record<string, number> = this.Wines.reduce((acc, wine) => {
  if (acc[wine.country]) {
    acc[wine.country] += wine.count;
  } else {
    acc[wine.country] = wine.count;
  }
  return acc;
}, {} as Record<string, number>);

this.data = Object.keys(countryBottleCount).map(country => ({
  name: country,
  value: countryBottleCount[country]
}));

this.xAxisLabel = 'Країна';
this.yAxisLabel = 'Кількість бутылок';

}

}
