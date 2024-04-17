import { Component } from '@angular/core';
import {SliderService} from "../../services/slider.service";

@Component({
  selector: 'app-zuker',
  templateUrl: './zuker.component.html',
  styleUrl: './zuker.component.css'
})
export class ZukerComponent {
  constructor(private sliderService: SliderService) {}

sliderValue = 0;
get getHeader(){if (this.getSliderValue()<25)
  {
  return "Сухе вино";
} if (this.getSliderValue()<50)
  {
    return "Півсухе";
  }
  if (this.getSliderValue()<75)
  {
    return "Півсолодке вино";
  }
  return "Солодке";
}
  get getMain(){
  if (this.getSliderValue()<25)
  {
  return "Містить дуже мало цукру, майже до 0. У сухих винах більшість цукру перероблено дріжджами в алкоголь під час процесу ферментації. Сухі вина зазвичай мають більш виразну кислотність і таніни і можуть бути більш мінеральними та освіжаючими.";
} if (this.getSliderValue()<50)
  {
    return "Невелика кількість залишкового цукру залишається в півсухому вині після ферментації. Це надає напою певної солодкості, але не настільки, щоб вважати його солодким. Півсухі вина можуть мати більш м'який смак і більш збалансований профіль порівняно з сухими винами.";
  }
  if (this.getSliderValue()<75)
  {
    return "Має помітну солодкість, але не настільки, щоб вважати його солодким, як десертні вина. У півсолодких винах міститься більше цукру, ніж у півсухих винах, що надає їм більш соковитий та солодкий смак.";
  }
  return "Це вино з високим вмістом цукру, яке залишається після ферментації, або цукор додається в нього після. Десертні вина можуть бути дуже солодкими і липкими, з інтенсивними ароматами фруктів та ягід.";
}
get getRgb(){
  return `rgb(255,${255-(1.5*this.getSliderValue())},${255-(1.5*this.getSliderValue())})`
}
  getSliderValue(): number {
    return this.sliderService.getSliderValue();
  }
}
