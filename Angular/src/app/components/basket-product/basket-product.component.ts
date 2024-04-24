import {Component, Input, OnInit} from '@angular/core';
import {ShopService, Wine, WineBasket} from "../../services/shop.service";
import {FormControl, FormGroup} from "@angular/forms";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrl: './basket-product.component.css'
})
export class BasketProductComponent implements OnInit{

  @Input() product!:WineBasket;
 basketForm:FormGroup= new FormGroup(
    {
      count: new FormControl()
    }
  );
  constructor(private shopService:ShopService) {


  }

  ngOnInit() {
    this.ChangeCountSub();
  }

  ChangeCountSub() {
  this.basketForm.get('count')?.valueChanges.pipe(
  tap(level => {
   if (((/^\d+$/.test(level)) || level == "")) {
      const numLevel = parseInt(level);
      if (numLevel < 0 || numLevel > 20) {

        const correctedLevel = Math.min(Math.max(numLevel, 0), 1000);
        this.basketForm.get("count")?.setValue(correctedLevel, { emitEvent: false });
      }
    } else {

      this.basketForm.get("count")?.setValue(1, { emitEvent: false });
    }

  })
).subscribe();
}

  pluse()
  {
    this.product.count++;

  }
minus() {
  if (this.product.count > 0) {
    this.product.count--;
    const index = this.shopService.basket.findIndex(wine => wine.wine === this.product.wine);
    if (this.product.count==0) {
      this.shopService.basket.splice(index, 1);
    }
  }
}
check() {
    console.log(this.product.count)
  if (this.product.count == 0 || this.product.count==null)
  {
      this.shopService.basket = this.shopService.basket.filter(item => item !== this.product);
  }
 }

}
