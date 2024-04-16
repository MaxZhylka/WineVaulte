import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
  @ViewChildren('slider') sliders!: QueryList<ElementRef>;
  term: string="assets/img/img_5.png";
  term1: string="assets/img/img_6.png";
  constructor(private readonly elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.sliders.forEach(slider => {
      const nativeElement = slider.nativeElement as HTMLInputElement;
      nativeElement.style.setProperty('--value', nativeElement.value);
      nativeElement.style.setProperty('--min', nativeElement.min === '' ? '0' : nativeElement.min);
      nativeElement.style.setProperty('--max', nativeElement.max === '' ? '100' : nativeElement.max);
      nativeElement.addEventListener('input', () => {
        nativeElement.style.setProperty('--value', nativeElement.value);
      });
    });
  }
}
