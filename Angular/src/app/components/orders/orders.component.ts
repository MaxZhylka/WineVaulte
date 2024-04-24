import {Component, OnInit} from '@angular/core';
import {Order, ShopService} from "../../services/shop.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
    display:boolean=false;
    order!:Order;

  constructor(protected shopService:ShopService) {
  }
  ngOnInit() {
    console.log(this.shopService.wineOrders)
  }
  openOrder(event:Order)
  {
    this.order=event;
    this.display=true;
  }

    close()
  {



    this.display=false;
  }
}
