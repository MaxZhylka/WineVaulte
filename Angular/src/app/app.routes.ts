import { Routes } from '@angular/router';
import {WineShopSheetComponent} from "./components/wine-shop-sheet/wine-shop-sheet.component";
import {ProductionComponent} from "./components/production/production.component";

export const routes: Routes = [
  {path:'shop',component:WineShopSheetComponent},
  {path:'production', component:ProductionComponent}
];
