import { NgModule } from '@angular/core';
import {WineShopSheetComponent} from "../../components/wine-shop-sheet/wine-shop-sheet.component";
import {ProductionComponent} from "../../components/production/production.component";
import {HeaderComponent} from "../../components/header/header.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [WineShopSheetComponent, ProductionComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [HeaderComponent]
})
export class WineShopModule { }
