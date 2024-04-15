import {LOCALE_ID, NgModule} from '@angular/core';
import {WineShopSheetComponent} from "../../components/wine-shop-sheet/wine-shop-sheet.component";
import {ProductionComponent} from "../../components/production/production.component";
import {HeaderComponent} from "../../components/header/header.component";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FiltersComponent} from "../../components/filters/filters.component";
import {CheckBoxCircleComponent} from "../../components/check-box-circle/check-box-circle.component";
import {ProductsComponent} from "../../components/products/products.component";
import {ShopService} from "../../services/shop.service";
import {provideHttpClient, withFetch} from "@angular/common/http";
import {WineComponent} from "../../components/wine/wine.component";
import {BasketComponent} from "../../components/basket/basket.component";
import {BasketProductComponent} from "../../components/basket-product/basket-product.component";



@NgModule({
  declarations:
    [WineShopSheetComponent,
      ProductionComponent,
      HeaderComponent,
      FiltersComponent,
      CheckBoxCircleComponent,
      ProductsComponent,
      WineComponent,
      BasketComponent,
      BasketProductComponent
    ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [HeaderComponent],
  providers:[ShopService,
   provideHttpClient(withFetch()),
    { provide: LOCALE_ID, useValue: 'ru' }]
})
export class WineShopModule { }
