import { Routes } from '@angular/router';
import {WineShopSheetComponent} from "./components/wine-shop-sheet/wine-shop-sheet.component";
import {ProductionComponent} from "./components/production/production.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {ToursComponent} from "./components/tours/tours.component";
import {FullProductComponent} from "./components/full-product/full-product.component";
import {DocHelpComponent} from "./components/doc-help/doc-help.component";

export const routes: Routes = [
{ path: 'shop', component: WineShopSheetComponent},
{ path: 'production', component: ProductionComponent },
{ path: 'about-wine', component: AboutUsComponent},
{ path: 'tours', component: ToursComponent},
{ path: 'full-product', component: FullProductComponent },
{ path: 'full-product/:id', component: FullProductComponent},
   { path: 'help/:page', component: DocHelpComponent },
  {path: 'help',component:DocHelpComponent}
];
