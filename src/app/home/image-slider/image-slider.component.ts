import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
})
export class ImageSliderComponent {
  images: string[] = [
    'images/1_1_1.jpg',

    'images/4_3_1.jpg',

    '/images/5_2_1.jpg',

    'images/10-9.jpg',
  ];
}
interface image {
  img: string;
  title: string;
}
