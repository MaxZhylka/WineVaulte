import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Wine} from "../../services/shop.service";

@Component({
  selector: 'app-serch-el',
  templateUrl: './serch-el.component.html',
  styleUrl: './serch-el.component.css'
})
export class SearchElComponent {
@Input() wine!:Wine;
 @Output() basketPush:EventEmitter<Wine>= new EventEmitter<Wine>() ;
openFullWine()
{
  this.basketPush.emit(this.wine);
}
}
