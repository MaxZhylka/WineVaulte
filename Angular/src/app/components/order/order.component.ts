import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Order, OrderInfo, Wine} from "../../services/shop.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
 @Input() order!:Order;
  @Input() id!:number;
  @Output() openOrder:EventEmitter<Order>=new EventEmitter<Order>;

  get totalPrice(): number {
    let total = 0;
    if (this.order ) {
      this.order.wines.forEach(wine => {
        total += wine.wine.price;
      });
    }
    return total;
  }
  open()
  {
     document.body.style.overflowY = 'hidden';
   this.openOrder.emit(this.order);
  }

}
