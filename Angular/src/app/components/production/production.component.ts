import { Component } from '@angular/core';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrl: './production.component.css'
})
export class ProductionComponent {
  display:string="stats";
  setDisplay(event:string)
  {
    console.log(event);
    this.display=event;
  }
}
