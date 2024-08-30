import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../../services/data-services.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
})
export class ImageSliderComponent implements OnInit {
  constructor(private _dataServices: DataServicesService) {}
  Base_Url: string = 'http://localhost:3000/';
  images: HomeImage[] = [
    {
      _id: '',
      image: '',
      __v: 0,
    },
  ];
  ngOnInit(): void {
    this._dataServices.getHomeImages().subscribe((data) => {
      this.images = data;
    });
  }
  // images: string[] = [
  //   'images/1_1_1.jpg',

  //   'images/4_3_1.jpg',

  //   '/images/5_2_1.jpg',

  //   'images/10-9.jpg',
  // ];
}
interface HomeImage {
  _id: string;
  image: string;
  __v: number;
}
