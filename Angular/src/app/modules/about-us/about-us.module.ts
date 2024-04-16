import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutUsComponent} from "../../components/about-us/about-us.component";
import {ImageSliderComponent} from "../../components/image-slider/image-slider.component";

import {SliderComponent} from "../../components/slider/slider.component";
import {ZukerComponent} from "../../components/zuker/zuker.component";

@NgModule({
  declarations: [AboutUsComponent,ImageSliderComponent,SliderComponent,ZukerComponent],
  imports: [
    CommonModule,
  ]
})
export class AboutUsModule { }
