import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {SlideInterface} from "../slide-interface";
import {WineInfo} from "../about-us/about-us.component";

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {
@Input() slides:WineInfo[] =[];
@Input() mainTxt: string[]=[];
@Input() headerTxt: string[]=[];

 @ViewChild('slidesContainer') slidesContainer!: ElementRef;
currentIndex:number=0;

goTo(index: number): void {
  if (index === this.currentIndex) {
    return; // Ничего не делаем, если индекс не изменился
  }
  const currentSlide = this.slidesContainer.nativeElement.children[this.currentIndex] as HTMLElement;
  const nextSlide = this.slidesContainer.nativeElement.children[index] as HTMLElement;

  // Устанавливаем начальное положение для следующего слайда
  nextSlide.style.opacity='0';
  nextSlide.style.transform = 'translateY(-200%)'; // Позиционируем следующий слайд выше видимой области

 setTimeout(() => {


   currentSlide.style.transform = 'translateY(200%)';
   nextSlide.style.opacity = '1';
   nextSlide.style.transform = 'translateY(0)';


   currentSlide.style.opacity = '0';
   // Обновляем классы для активации слайда
   setTimeout(() => {
     currentSlide.classList.remove('active');
     nextSlide.classList.add('active');
     this.currentIndex = index;
   }, 300);

 },150);
}




}


