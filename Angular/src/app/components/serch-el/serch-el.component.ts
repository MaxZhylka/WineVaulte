import {Component, Input} from '@angular/core';
import {Wine} from "../../services/shop.service";

@Component({
  selector: 'app-serch-el',
  templateUrl: './serch-el.component.html',
  styleUrl: './serch-el.component.css'
})
export class SearchElComponent {
@Input() wine!:Wine;
 @Input() ResetFunction!: Function;
openFullWine()
{
  this.ResetFunction();
}
}
