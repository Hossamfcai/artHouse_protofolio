import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { routeAnimationState } from '../../../shared/routeAnimation';
import { DataServicesService } from '../services/data-services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css',
  providers: [DataServicesService],
  animations: [routeAnimationState],
})
export class DepartmentsComponent implements OnInit, OnDestroy {
  constructor(private dataService: DataServicesService) {}
  subscription: Subscription = new Subscription();
  departments: department[] = [];
  ngOnInit(): void {
    const getSubscription = this.dataService
      .getDepartments()
      .subscribe((data) => {
        this.departments = data;
        // console.log(this.departments);
      });
    this.subscription.add(getSubscription);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  // departments: department[] = [
  //   {
  //     department: 'Bedroom',
  //     product: [
  //       {
  //         img: 'images/bedroom/1_10.jpg',
  //         title: 'Flora bedroom, 5pieces - art-158',
  //         price: '114,000',
  //       },
  //       {
  //         img: 'images/bedroom/1_10.jpg',
  //         title: 'Flora bedroom, 5pieces - art-158',
  //         price: '114,000',
  //       },
  //       {
  //         img: 'images/bedroom/1_10.jpg',
  //         title: 'Flora bedroom, 5pieces - art-158',
  //         price: '114,000',
  //       },
  //       {
  //         img: 'images/bedroom/1_10.jpg',
  //         title: 'Flora bedroom, 5pieces - art-158',
  //         price: '114,000',
  //       },
  //       {
  //         img: 'images/bedroom/1_13.jpg',
  //         title: 'Reval bedroom,5pieces - art-161',
  //         price: '111,600',
  //       },
  //       {
  //         img: 'images/bedroom/1_14.jpg',
  //         title: 'Zezenia bedroom,5pieces - art-162',
  //         price: '117,600',
  //       },
  //       {
  //         img: 'images/bedroom/1_15.jpg',
  //         title: 'Glem bedroom,5pieces - art-163',
  //         price: '111,000',
  //       },
  //     ],
  //   },
  //   {
  //     department: 'Dining room',
  //     product: [
  //       {
  //         img: 'images/dining room/1_1_15.jpg',
  //         title: 'Rival Dinning room,3pieces - art-167',
  //         price: '101,750',
  //       },
  //       {
  //         img: 'images/dining room/1_16.jpg',
  //         title: 'Glem dinning room,3pieces - art-165',
  //         price: '118,250',
  //       },
  //       {
  //         img: 'images/dining room/2_21.jpg',
  //         title: 'Louran Dinning room,3pieces - art-168',
  //         price: '101,200',
  //       },
  //       {
  //         img: 'images/dining room/04_1_1.jpg',
  //         title: 'Karla dinning room,4pieces - art-166',
  //         price: '99,000',
  //       },
  //     ],
  //   },
  //   {
  //     department: 'Salon',
  //     product: [
  //       {
  //         img: 'images/salon/zizinia_1.jpg',
  //         title: 'Salon Zizinia, 5pieces - art-ne4-1',
  //         price: '72,000',
  //       },
  //       {
  //         img: 'images/salon/squar.jpg',
  //         title: 'Salon Square, 7pieces - art-sa4',
  //         price: '81,000',
  //       },
  //       {
  //         img: 'images/salon/04_cop.jpg',
  //         title: 'Salon Biza, 5pieces - art-ne2',
  //         price: '81,000',
  //       },
  //       {
  //         img: 'images/salon/carla-salon-1.png3.png',
  //         title: 'Salon Carla, 6pieces - art-ne1',
  //         price: '81,000',
  //       },
  //     ],
  //   },
  // ];
}
export interface department {
  _id: string;
  department: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}
// export interface product {
//   img: string;
//   title: string;
//   price: string;
// }
