import {Component, Inject, Input, PLATFORM_ID} from '@angular/core';
import {SlideInterface} from "../slide-interface";
import {fadeInOut} from "../fade";
import {isPlatformBrowser} from "@angular/common";

export interface WineInfo {
  url: string;
  title: string;
  mainText: string;
  headText: string;
}
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
  animations: [
    fadeInOut
  ]
})
export class AboutUsComponent {

 wines: WineInfo[] = [
  {
    url: '/assets/img/img_1.png',
    title: 'red',
    mainText: "Зазвичай виробляється з червоних сортів винограду, де шкірка є основним джерелом кольору. Відтінки червоного вина можуть варіюватися від яскраво-червоного до глибокого пурпурового або навіть чорного. Червоне вино часто асоціюється з багатством і теплом.",
    headText: "Червоне вино"
  },
  {
    url: '/assets/img/img_2.png',
    title: 'white',
    mainText: "Виробляється з зелених або жовтих сортів винограду. Колір білого вина може варіюватися від блідого жовтого до насиченого золотистого відтінку. Біле вино зазвичай пов'язують з легкістю, свіжістю та чистотою.",
    headText: "Біле вино"
  },
  {
    url: '/assets/img/img_3.png',
    title: 'purple',
    mainText: "Відоме також як рожеве або горчичне вино. Рожеве вино зазвичай виробляється з червоних сортів винограду, але процес ферментації обмежений, щоб зберегти певну кількість танінів з шкірки, що надає рожевому вину його характерний рожевий відтінок.",
    headText: "Рожеве вино"
  },
  {
    url: '/assets/img/img_4.png',
    title: 'orange',
    mainText: "Це відносно новий тренд у світі виноробства, де біле вино виробляється за допомогою методів, які зазвичай використовуються для червоних вин, що надає йому помаранчевий або янтарний відтінок. Помаранчеве вино зазвичай має більш насичений смак і текстуру порівняно з звичайними білими винами.",
    headText: "Помаранчеве вино"
  }
];

  view: string="assets/img/img.png" ;
    isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
