import {Component, OnInit} from '@angular/core';
import {ShopService} from "../../services/shop.service";
import {Wine} from "../../services/shop.service";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
 Wines:Wine[]=this.filterWines;
  constructor(public shopService:ShopService) {
  }

  ngOnInit() {
    this.getWines();
     this.Wines=this.Wines.sort((a, b) => b.count - a.count);
  }

 getWines = () => {
    this.shopService.getWines().subscribe({
      next: (data: Wine[]) => {
        this.Wines = data;

      },
      error: (error) => {
        console.error('Failed to load wines', error);
      }
    });
  };
  get filterWines(): Wine[] {
    if (!this.Wines || this.Wines.length === 0) return [];

    const filters = this.shopService.Filters;
    const activeFilters = Object.entries(filters).filter(([_, [isActive]]) => isActive);
    if (activeFilters.length === 0) {
      return this.Wines;
    }


  const producerFilters = activeFilters.filter(([key, _]) => ['Masi', 'Trapiche', 'Simonsig', 'Torres', 'Shabo', 'Colonist'].includes(key));
  const sugarFilters = activeFilters.filter(([key, _]) => ['sweet', 'halfSweet', 'halfDry', 'Dry'].includes(key));
  const colorFilters = activeFilters.filter(([key, _]) => ['White', 'Pink', 'Red', 'Orange'].includes(key));
  const countryFilters = activeFilters.filter(([key, _]) => ['USA', 'Italy', 'Spain', 'Ukraine', 'France'].includes(key));

  return this.Wines.filter(wine => {

    return this.checkFilterGroup(wine, producerFilters) &&
           this.checkFilterGroup(wine, sugarFilters) &&
           this.checkFilterGroup(wine, colorFilters) &&
           this.checkFilterGroup(wine, countryFilters);
  });
}

private checkFilterGroup(wine: Wine, filterGroup: [string, [boolean, string]][]): boolean {
  return filterGroup.length === 0 || filterGroup.some(([key, [_, filterValue]]) => {
    const wineProperty = this.getWinePropertyByKey(key, wine);
    return wineProperty && wineProperty.toString().toLowerCase() === filterValue.toLowerCase();

  });
}

private getWinePropertyByKey(key: string, wine: Wine): any {
  const propertyMap: { [key: string]: keyof Wine } = {
    Masi: 'producer', Trapiche: 'producer', Simonsig: 'producer', Torres: 'producer', Shabo: 'producer', Colonist: 'producer',
    sweet: 'sugar', halfSweet: 'sugar', halfDry: 'sugar', Dry: 'sugar',
    White: 'color', Pink: 'color', Red: 'color', Orange: 'color',
    USA: 'country', Italy: 'country', Spain: 'country', Ukraine: 'country', France: 'country'
  };
  return wine[propertyMap[key]];
}


}
