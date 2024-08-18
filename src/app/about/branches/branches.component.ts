import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../../services/data-services.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.css',
  providers: [DataServicesService],
})
export class BranchesComponent implements OnInit {
  constructor(private _dataService: DataServicesService) {}
  branches: Branch[] = [];
  Base_Url: string = 'http://localhost:3000/';
  ngOnInit(): void {
    this._dataService.getBranches().subscribe((data) => {
      this.branches = data;
    });
  }
}
interface Branch {
  _id: string;
  branchName: string;
  branchImg: string;
  __v: number;
}
