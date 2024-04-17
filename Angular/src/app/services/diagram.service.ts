import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Wine} from "./shop.service";

@Injectable({
  providedIn: 'root'
})
export class DiagramService {

private baseurl= 'http://127.0.0.1:8000/api/wines/';
    constructor(private http: HttpClient) { }

  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.baseurl);
  }

}
