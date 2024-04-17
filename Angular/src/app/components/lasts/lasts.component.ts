import {Component, Input, OnInit} from '@angular/core';
import {ShopService} from "../../services/shop.service";
import {Wine} from "../../services/shop.service";

@Component({
  selector: 'app-lasts',
  templateUrl: './lasts.component.html',
  styleUrl: './lasts.component.css'
})
export class LastsComponent implements OnInit{
 @Input() Wine!:Wine;
  basket:string="../../../assets/img/basket.png";
  color:string="../../../assets/img/";
  noExist:string='../../../assets/img/noExists.png';
  backGroundColor:string='';
  constructor(private shopService:ShopService) {
}
ngOnInit() {
    this.getText;
}

  get getText()
  {
    if(this.Wine.count==0)
    {
      this.backGroundColor='#FF0000'
      return 'СКІНЧИЛОСЯ!!!'
    }
    if(this.Wine.count<=10)
    {
      this.backGroundColor='#EB5334'
      return `Залишилося ${this.Wine.count}`;
    }
     if(this.Wine.count<20)
    {
      this.backGroundColor='#EB8334'
      return `Залишилося ${this.Wine.count}`;
    }
     else
       {
         this.backGroundColor='#EBE234'
      return `Залишилося ${this.Wine.count}`;
    }
  }

}
