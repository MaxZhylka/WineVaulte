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
export interface OrderInfo {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
}
export interface Order {
  wines: Wine[];
  orderInfo: OrderInfo;
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

];


  constructor(private http: HttpClient) { }

  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.baseurl);
  }



wineOrders: Order[] = [
  {
    wines: [
      {
        id: 9,
        name: "Torres Vina Esmeralda",
        count: 55,
        image: "http://127.0.0.1:8000/media/Torres_Vina_Esmeralda_4gIXdoq.png",
        color: "Помаранчиве",
        sugar: "Солодке",
        country: "Іспанія",
        producer: "Torres",
        description: "Вино Torres Vina Esmeralda, біле, сухе, 11,5%, 0,75 л (33764)",
        fullDescription: "Вино Torres (Торрес) Vina Esmeralda характеризується бархатистим гладким смаком, з ніжною солодкістю апельсинового меду та тривалим, свіжим післясмаком.\r\n\r\nКолір: блідо-солом'яний\r\n\r\nСмак: збалансований, гладкий\r\n\r\nАромат: квіткові ноти з відтінками яблука та винограду\r\n\r\nГастрономічне поєднання: морепродукти, риба, паштети\r\n\r\nТемпература подачі: 10-11°C\r\n\r\nСорт винограду:\r\n\r\nМускат Олександрійський\r\nГевюрцтрамінер\r\nРегіон: Каталонія\r\n\r\nВиробник: Torres, Іспанія.",
        volume: 0.75,
        strength: 11,
        exposureTime: "-",
        price: 322
      },

    ],
    orderInfo: {
      email: "dexhonesta@gmail.com",
      firstName: "Max",
      lastName: "Zhylka",
      address: "ZapShose 35",
      phone: "+380970954817"
    }
  },
  {
    wines: [
      {
        id: 9,
        name: "Torres Vina Esmeralda",
        count: 55,
        image: "http://127.0.0.1:8000/media/Torres_Vina_Esmeralda_4gIXdoq.png",
        color: "Помаранчиве",
        sugar: "Солодке",
        country: "Іспанія",
        producer: "Torres",
        description: "Вино Torres Vina Esmeralda, біле, сухе, 11,5%, 0,75 л (33764)",
        fullDescription: "Вино Torres (Торрес) Vina Esmeralda характеризується бархатистим гладким смаком, з ніжною солодкістю апельсинового меду та тривалим, свіжим післясмаком.\r\n\r\nКолір: блідо-солом'яний\r\n\r\nСмак: збалансований, гладкий\r\n\r\nАромат: квіткові ноти з відтінками яблука та винограду\r\n\r\nГастрономічне поєднання: морепродукти, риба, паштети\r\n\r\nТемпература подачі: 10-11°C\r\n\r\nСорт винограду:\r\n\r\nМускат Олександрійський\r\nГевюрцтрамінер\r\nРегіон: Каталонія\r\n\r\nВиробник: Torres, Іспанія.",
        volume: 0.75,
        strength: 11,
        exposureTime: "-",
        price: 322
      },

    ],
    orderInfo: {
      email: "dexhonesta@gmail.com",
      firstName: "Max",
      lastName: "Zhylka",
      address: "ZapShose 35",
      phone: "+380970954817"
    }
  },
  {
    wines: [
      {
        id: 9,
        name: "Torres Vina Esmeralda",
        count: 55,
        image: "http://127.0.0.1:8000/media/Torres_Vina_Esmeralda_4gIXdoq.png",
        color: "Помаранчиве",
        sugar: "Солодке",
        country: "Іспанія",
        producer: "Torres",
        description: "Вино Torres Vina Esmeralda, біле, сухе, 11,5%, 0,75 л (33764)",
        fullDescription: "Вино Torres (Торрес) Vina Esmeralda характеризується бархатистим гладким смаком, з ніжною солодкістю апельсинового меду та тривалим, свіжим післясмаком.\r\n\r\nКолір: блідо-солом'яний\r\n\r\nСмак: збалансований, гладкий\r\n\r\nАромат: квіткові ноти з відтінками яблука та винограду\r\n\r\nГастрономічне поєднання: морепродукти, риба, паштети\r\n\r\nТемпература подачі: 10-11°C\r\n\r\nСорт винограду:\r\n\r\nМускат Олександрійський\r\nГевюрцтрамінер\r\nРегіон: Каталонія\r\n\r\nВиробник: Torres, Іспанія.",
        volume: 0.75,
        strength: 11,
        exposureTime: "-",
        price: 322
      },

    ],
    orderInfo: {
      email: "dexhonesta@gmail.com",
      firstName: "Max",
      lastName: "Zhylka",
      address: "ZapShose 35",
      phone: "+380970954817"
    }
  }

];


}
