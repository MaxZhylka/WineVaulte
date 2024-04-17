import {Component, OnInit} from '@angular/core';
import {ShopService, Wine} from "../../services/shop.service";

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.css'
})
export class StorageComponent implements OnInit{
  Wines:Wine[]=[];

  constructor(private shopService:ShopService) {
  }
  ngOnInit() {
    this.getWines();
  }

  getWines = () => {
  this.shopService.getWines().subscribe({
    next: (data: Wine[]) => {

      this.Wines = data.filter(wine => wine.count < 25)
                       .sort((a, b) => a.count - b.count);
    },
    error: (error) => {
      console.error('Failed to load wines', error);
    }
  });
};

}

