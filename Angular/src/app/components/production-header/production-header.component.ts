import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-production-header',
  templateUrl: './production-header.component.html',
  styleUrl: './production-header.component.css'
})
export class ProductionHeaderComponent {
  display:string="stats";
  @Output() Display:EventEmitter<string>=new EventEmitter<string>();
  changeDisplay(data:string)
  {
    this.display=data;
    this.Display.emit(this.display);
  }
}
