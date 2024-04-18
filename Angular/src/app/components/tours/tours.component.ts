import {AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {fadeInOut} from "../fade";
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css',
  animations: [fadeInOut]
})
export class ToursComponent implements AfterViewInit{
   isBrowser: boolean=false;
    src1:string='../../../assets/img/img_7.png';
     src2:string='../../../assets/img/img_8.png';
      src3:string='../../../assets/img/img_9.png';
       src4:string='../../../assets/img/img_10.png';
        src5:string='../../../assets/img/img_11.png';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  @ViewChild('mapContainer') mapElement!: ElementRef;
  map!: mapboxgl.Map;

  ngAfterViewInit() {
    if (this.mapElement) {
      this.map = new mapboxgl.Map({
        accessToken: 'pk.eyJ1IjoiZmxhbWVwbGF5IiwiYSI6ImNsdjU5NDBsZzAwZzEyam10Zml2OHRlODYifQ.v3t5nI5z-qeZ-PqS0ypCAw',
        container: this.mapElement.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [35.05665, 48.46551],

        zoom: 13.15
      });
       new mapboxgl.Marker()
            .setLngLat([35.05665, 48.46551])
            .addTo(this.map);
    }
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }
}
