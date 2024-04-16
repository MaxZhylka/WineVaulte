import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
 producers:string[]=['Masi','Trapiche','Simonsig','Torres','Shabo','Colonist'];
  sugar:string[]=['Солодке','Напівсолодке',"Напівсухе","Сухе" ];
  color:string[]=['Біле','Рожеве',"Червоне","Помаранчиве"];
  country:string[]=['США','Італія','Іспанія','Україна','Франція'];
  sugarId:string[]=['sweet','halfSweet','halfDry','Dry'];
  colorId:string[]=['White','Pink',"Red","Orange"];
  countryId:string[]=['USA',"Italy","Spain","Ukraine","France"];
}
