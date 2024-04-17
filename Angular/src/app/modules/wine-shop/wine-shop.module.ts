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
import {SearchElComponent} from "../../components/serch-el/serch-el.component";
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductionHeaderComponent} from "../../components/production-header/production-header.component";
import {StatsComponent} from "../../components/stats/stats.component";
import {StorageComponent} from "../../components/storage/storage.component";
import {OrdersComponent} from "../../components/orders/orders.component";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {provideAnimations} from "@angular/platform-browser/animations";
import {DiagramService} from "../../services/diagram.service";
import {LastsComponent} from "../../components/lasts/lasts.component";
import {ConfrimOrderComponent} from "../../components/confrim-order/confrim-order.component";
import {OrderComponent} from "../../components/order/order.component";
import {FullOrderComponent} from "../../components/full-order/full-order.component";


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
      BasketProductComponent,
      SearchElComponent,
      ProductionHeaderComponent,
      StatsComponent,
      StorageComponent,
      OrdersComponent,
      LastsComponent,
      ConfrimOrderComponent,
      OrderComponent,
      FullOrderComponent
    ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    NgxChartsModule,
    ReactiveFormsModule,


  ],
  exports: [HeaderComponent],
  providers:[ShopService,DiagramService,
   provideHttpClient(withFetch()),
    { provide: LOCALE_ID, useValue: 'ru' },
  provideAnimations()]

})
export class WineShopModule { }
