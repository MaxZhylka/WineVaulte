import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
export interface Wine
{
  id:number;
  name:string;
  count:number;
  image:string;
  color:string;
  sugar:string;
  country:string;
  producer:string;
  description:string;
  fullDescription:string;
  volume:number;
  strength:number;
  exposureTime:string;
  price:number;

}
interface Filter {
  Masi: [boolean, string];
  Trapiche: [boolean, string];
  Simonsig: [boolean, string];
  Torres: [boolean, string];
  Shabo: [boolean, string];
  Colonist: [boolean, string];

  sweet: [boolean, string];
  halfSweet: [boolean, string];
  halfDry: [boolean, string];
  Dry: [boolean, string];

  White: [boolean, string];
  Pink: [boolean, string];
  Red: [boolean, string];
  Orange: [boolean, string];

  USA: [boolean, string];
  Italy: [boolean, string];
  Spain: [boolean, string];
  Ukraine: [boolean, string];
  France: [boolean, string];
   [key: string]: [boolean, string];
}

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseurl= 'http://127.0.0.1:8000/api/wines/';
  basket:Wine[]=[];
  Filters: Filter = {
  Masi: [false, 'Masi'],
  Trapiche: [false, 'Trapiche'],
  Simonsig: [false, 'Simonsig'],
  Torres: [false, 'Torres'],
  Shabo: [false, 'Shabo'],
  Colonist: [false, 'Colonist'],

  sweet: [false, 'Солодке'],
  halfSweet: [false, 'Напівсолодке'],
  halfDry: [false, 'Напівсухе'],
  Dry: [false, 'Cухе'],

  White: [false, 'Біле'],
  Pink: [false, 'Рожеве'],
  Red: [false, 'Червоне'],
  Orange: [false, 'Помаранчиве'],

  USA: [false, 'США'],
  Italy: [false, 'Італія'],
  Spain: [false, 'Іспанія'],
  Ukraine: [false, 'Україна'],
  France: [false, 'Франція']

};
 wines: Wine[] = [
    { id: 1, name: "Masi Valpolicella Classico", count: 11, image: "http://127.0.0.1:8000/media/masiValpolicella_o3XqiDL.png", color: "Червоне", sugar: "Cухе", country: "Італія", producer: "Masi", description: "Вино Masi Valpolicella Classico Bonacosta, красное, сухое, 12%, 0,75 л", fullDescription: "Описание 1", volume: 0.75, strength: 12, exposureTime: "-", price: 870.0 },
    { id: 2, name: "Masi Fresco di Masi Blanc", count: 55, image: "http://127.0.0.1:8000/media/masiFresco_mstRE0l.png", color: "Біле", sugar: "Cухе", country: "Італія", producer: "Masi", description: "Описание 2", fullDescription: "Описание 2", volume: 0.75, strength: 11, exposureTime: "-", price: 840.0 },
    { id: 3, name: "Masi Rosato Trevenezie", count: 124, image: "http://127.0.0.1:8000/media/masiRosato_LaE1MU3.png", color: "Рожеве", sugar: "Cухе", country: "Італія", producer: "Masi", description: "Описание 3", fullDescription: "Описание 3", volume: 0.75, strength: 12.5, exposureTime: "-", price: 664.0 }
];


  constructor(private http: HttpClient) { }

  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.baseurl);
  }

 wineOrders:any[]=[];




}
