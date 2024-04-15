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
    const filters = this.shopService.Filters;
    const activeFilters = Object.entries(filters).filter(([_, [isActive]]) => isActive);

    if (activeFilters.length === 0) {
      return this.Wines; // Если нет активных фильтров, вернуть все вина
    }

    return this.Wines.filter(wine => {
      return activeFilters.every(([key, [_, filterValue]]) => {
        const wineProperty = this.getWinePropertyByKey(key, wine);
        return wineProperty && wineProperty.toString().includes(filterValue);
      });
    });
  }

  private getWinePropertyByKey(key: string, wine: Wine): any {
    // Сопоставления ключей фильтров с свойствами вина
    const propertyMap: { [key: string]: keyof Wine } = {
      Masi: 'producer',
      Trapiche: 'producer',
      Simonsig: 'producer',
      Torres: 'producer',
      Shabo: 'producer',
      Colonist: 'producer',

      sweet: 'sugar',
      halfSweet: 'sugar',
      halfDry: 'sugar',
      Dry: 'sugar',

      White: 'color',
      Pink: 'color',
      Red: 'color',
      Orange: 'color',

      USA: 'country',
      Italy: 'country',
      Spain: 'country',
      Ukraine: 'country',
      France: 'country'
    };

    // Если ключ существует в map, используем его для получения свойства из объекта wine
    if (key in propertyMap) {
      const winePropertyKey = propertyMap[key];
      return wine[winePropertyKey];
    }

    // Возврат undefined, если ключ не существует
    return undefined;
}

}
