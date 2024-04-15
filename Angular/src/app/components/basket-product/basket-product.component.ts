import {Component, Input} from '@angular/core';
import {Wine} from "../../services/shop.service";

@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrl: './basket-product.component.css'
})
export class BasketProductComponent {

  @Input() product!:[Wine,number];

}
