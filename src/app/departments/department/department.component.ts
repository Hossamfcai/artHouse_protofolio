import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { department } from '../departments.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent implements AfterViewInit {
  @ViewChild('productsContainer') productsContainer!: ElementRef;
  @ViewChild('leftButton') leftButton!: ElementRef;
  @ViewChild('rightButton') rightButton!: ElementRef;

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
  @Input() department: department = {
    department: '',
    product: [],
  };
}
