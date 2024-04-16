import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
export interface Wine
{
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


  constructor(private http: HttpClient) { }

  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.baseurl);
  }




}
