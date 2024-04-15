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
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseurl= 'http://127.0.0.1:8000/api/wines/';
  basket:Wine[]=[];

  constructor(private http: HttpClient) { }

  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.baseurl);
  }




}
