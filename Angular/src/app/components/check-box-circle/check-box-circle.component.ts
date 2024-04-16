import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShopService} from "../../services/shop.service";

@Component({
  selector: 'app-check-box-circle',
  templateUrl: './check-box-circle.component.html',
  styleUrl: './check-box-circle.component.css'
})
export class CheckBoxCircleComponent {
  inspirOne: string = '../../../assets/img/untoggle.png';
  inspirTwo: string = '../../../assets/img/toggle.png';
  @Input() id!: string;

  @Output() toggleChange = new EventEmitter<boolean>();


  constructor(private shopService: ShopService) {
  }

  get currentImage() {
    if (this.shopService.Filters[this.id][0]) {
      return this.inspirTwo;
    } else return this.inspirOne;
  }

  toggleImage() {

    if (this.id in this.shopService.Filters) {

      this.shopService.Filters[this.id][0] = !this.shopService.Filters[this.id][0];
    }
    console.log(this.shopService.Filters);

  }


}
