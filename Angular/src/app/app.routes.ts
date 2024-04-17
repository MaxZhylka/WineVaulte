import { Routes } from '@angular/router';
import {WineShopSheetComponent} from "./components/wine-shop-sheet/wine-shop-sheet.component";
import {ProductionComponent} from "./components/production/production.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";

export const routes: Routes = [
{ path: 'shop', component: WineShopSheetComponent},
{ path: 'production', component: ProductionComponent },
{ path: 'about-wine', component: AboutUsComponent}

];
