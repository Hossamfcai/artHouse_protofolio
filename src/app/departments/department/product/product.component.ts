import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { product } from '../department.component';
import { routeAnimationState } from '../../../../../shared/routeAnimation';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  animations: [routeAnimationState],
})
export class ProductComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  @Input() product: product = {
    _id: '',
    filename: '',
    title: '',
    price: '',
    departmentName: '',
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
