import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
private sliderValue: number = 0;

  getSliderValue(): number {
    return this.sliderValue;
  }

  setSliderValue(value: number): void {
    this.sliderValue = value;
  }
}
