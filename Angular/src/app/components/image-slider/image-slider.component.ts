import {Component, Input} from '@angular/core';
import {SlideInterface} from "../slide-interface";

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {
@Input() slides:SlideInterface[] =[];
@Input() mainTxt: string[]=[];
@Input() headerTxt: string[]=[];
currentIndex:number=0;


goTo(index: number): void {
    this.currentIndex = index;
  }
getCurrentSlideUrl(): any {
  if (this.slides && this.slides[this.currentIndex]) {
    return this.slides[this.currentIndex].url;
  }
}
getCurrentMainText(): any {
  if (this.mainTxt && this.mainTxt[this.currentIndex]) {
    return this.mainTxt[this.currentIndex];
  }
}
getCurrentHeadText(): any {
  if (this.headerTxt && this.headerTxt[this.currentIndex]) {
    return this.headerTxt[this.currentIndex];
  }
}
}
