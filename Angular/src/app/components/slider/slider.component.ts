import {Component, ViewChildren, QueryList, OnInit} from '@angular/core';
import { SliderService } from '../../services/slider.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent{
  @ViewChildren('slider') sliders!: QueryList<any>;
  term: string="assets/img/img_5.png";
  term1: string="assets/img/img_6.png";
  constructor(private sliderService: SliderService) {}

  ngAfterViewInit() {
    this.sliders.forEach(slider => {
      const nativeElement = slider.nativeElement as HTMLInputElement;
      nativeElement.style.setProperty('--value', nativeElement.value);
      nativeElement.style.setProperty('--min', nativeElement.min === '' ? '0' : nativeElement.min);
      nativeElement.style.setProperty('--max', nativeElement.max === '' ? '100' : nativeElement.max);
      nativeElement.addEventListener('input', () => {
        const value = parseInt(nativeElement.value, 10);
        nativeElement.style.setProperty('--value', value.toString());
        this.sliderService.setSliderValue(value);
      });
    });
  }
}
