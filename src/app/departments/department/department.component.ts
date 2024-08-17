import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { department } from '../departments.component';
import { HttpClient } from '@angular/common/http';
import { DataServicesService } from '../../services/data-services.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
  providers: [DataServicesService],
})
export class DepartmentComponent implements AfterViewInit, OnInit {
  constructor(private _dataservice: DataServicesService) {}

  @ViewChild('productsContainer') productsContainer!: ElementRef;
  @ViewChild('leftButton') leftButton!: ElementRef;
  @ViewChild('rightButton') rightButton!: ElementRef;
  @Input() department!: string;
  products: product[] = [];
  ngOnInit(): void {
    this._dataservice.getProducts().subscribe((data) => {
      this.products = data;
      // console.log(this.products);
    });
  }
  ngAfterViewInit() {
    this.checkOverflow();
  }

  checkOverflow() {
    if (this.productsContainer && this.leftButton && this.rightButton) {
      const container = this.productsContainer.nativeElement;
      const leftButton = this.leftButton.nativeElement;
      const rightButton = this.rightButton.nativeElement;

      if (container.scrollWidth > container.clientWidth) {
        leftButton.style.visibility = 'visible';
        rightButton.style.visibility = 'visible';
      } else {
        leftButton.style.visibility = 'hidden';
        rightButton.style.visibility = 'hidden';
      }
    }
  }

  scroll(distance: number) {
    this.productsContainer.nativeElement.scrollLeft += distance;
  }
}

export interface product {
  _id: string;
  filename: string;
  title: string;
  price: string;
  department: {
    _id: string;
    department: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}
