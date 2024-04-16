import {Component, Input} from '@angular/core';
import {ShopService, Wine} from "../../services/shop.service";

@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrl: './basket-product.component.css'
})
export class BasketProductComponent {

  @Input() product!:[Wine,number];

  constructor(private shopService:ShopService) {


  }

  pluse()
  {
    this.product[1]++;
    this.shopService.basket.push(this.product[0]);
    this.shopService.basket.sort((a, b) => a.price - b.price);
  }
minus() {
  if (this.product[1] > 0) {
    this.product[1]--;
    const index = this.shopService.basket.findIndex(wine => wine === this.product[0]);
    if (index !== -1) {
      this.shopService.basket.splice(index, 1);
    }
  }
}

}
