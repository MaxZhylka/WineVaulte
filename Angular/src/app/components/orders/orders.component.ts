import {Component, OnInit} from '@angular/core';
import {ShopService} from "../../services/shop.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{

  constructor(protected shopService:ShopService) {
  }
  ngOnInit() {
    console.log(this.shopService.wineOrders)
  }
}
