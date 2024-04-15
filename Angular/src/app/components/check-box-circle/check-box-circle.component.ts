import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ShopService} from "../../services/shop.service";

@Component({
  selector: 'app-check-box-circle',
  templateUrl: './check-box-circle.component.html',
  styleUrl: './check-box-circle.component.css'
})
export class CheckBoxCircleComponent {
  inspirOne: string = '../../../assets/img/untoggle.png';
  inspirTwo: string = '../../../assets/img/toggle.png';
  @Input()id!: string;
  currentImage: string = this.inspirOne;
   @Output() toggleChange = new EventEmitter<boolean>();
  private _toggle: boolean = false;

  constructor(private shopService:ShopService) {
  }

  get toggle(): boolean {
    return this._toggle;
  }

  set toggle(value: boolean) {
    this._toggle = value;

    this.toggleChange.emit(this._toggle);
  }

  toggleImage() {
    this.currentImage = (this.currentImage === this.inspirOne) ? this.inspirTwo : this.inspirOne;
       if (this.id in this.shopService.Filters) {

         this.shopService.Filters[this.id][0] = !this.shopService.Filters[this.id][0];
       }
       console.log(this.shopService.Filters);
    this.toggle = !this.toggle;
  }


}
