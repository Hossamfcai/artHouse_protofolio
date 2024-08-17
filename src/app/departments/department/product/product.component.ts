import { Component, Input, OnInit } from '@angular/core';
import { product } from '../department.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product: product = {
    _id: '',
    filename: '',
    title: '',
    price: '',
    department: {
      _id: '',
      department: '',
      createdAt: '',
      updatedAt: '',
      __v: 0,
    },
    createdAt: '',
    updatedAt: '',
    __v: 0,
  };
  Base_Url: string = 'http://localhost:3000/';
}
