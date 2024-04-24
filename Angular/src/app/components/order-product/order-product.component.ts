import {Component, Input} from '@angular/core';
import {Wine, WineBasket} from "../../services/shop.service";

@Component({
  selector: 'app-order-product',

  templateUrl: './order-product.component.html',
  styleUrl: './order-product.component.css'
})
export class OrderProductComponent {
  @Input() product!:WineBasket;
}
