import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { routeAnimationState } from '../../../shared/routeAnimation';
import { DataServicesService } from '../services/data-services.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [routeAnimationState],
  providers: [DataServicesService],
})
export class AboutComponent implements OnInit, OnDestroy {
  constructor(private _dataService: DataServicesService) {}

  private subscripe: Subscription = new Subscription();
  Base_Url: string = 'http://localhost:3000/';
  aboutData: aboutData = {
    _id: '',
    headerImg: '',
    firstImage: '',
    secondImage: '',
    history: '',
    growth: '',
    MissionAndVisionstatement: '',
    strategy: '',
    WhyArtHouse: '',
    OurScope: '',
    OurCommitment: '',
    __v: 0,
  };
  ngOnInit(): void {
    const aboutSubscripe = this._dataService
      .getAboutData()
      .subscribe((data) => {
        // console.log(data[0]);
        this.aboutData = data[0];
        this.subscripe.add(aboutSubscripe);
      });
  }
  ngOnDestroy(): void {
    this.subscripe.unsubscribe();
  }
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
}

export interface aboutData {
  _id: string;
  headerImg: string;
  firstImage: string;
  secondImage: string;
  history: string;
  growth: string;
  MissionAndVisionstatement: string;
  strategy: string;
  WhyArtHouse: string;
  OurScope: string;
  OurCommitment: string;
  __v: number;
}
