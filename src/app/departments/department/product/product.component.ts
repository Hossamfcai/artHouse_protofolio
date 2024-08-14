import { Component, Input, OnInit } from '@angular/core';
import { product } from '../../departments.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product: product = {
    img: '',
    title: '',
    price: '',
  };
}
