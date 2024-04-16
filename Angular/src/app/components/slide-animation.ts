import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.5s ease', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('0.5s ease', style({ opacity: 0 })),
  ]),
]);
