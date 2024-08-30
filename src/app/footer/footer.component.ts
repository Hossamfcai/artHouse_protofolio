import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../services/data-services.service';
import { department } from '../departments/departments.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [DataServicesService],
})
export class FooterComponent implements OnInit {
  constructor(private _dataService: DataServicesService) {}
  departments: department[] = [];

  ngOnInit(): void {
    this._dataService.getDepartments().subscribe((data) => {
      this.departments = data;
    });
  }

  navigateToDepartment(department: string) {}
}
