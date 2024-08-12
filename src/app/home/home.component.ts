import { Component, HostBinding } from '@angular/core';
import { routeAnimationState } from '../../../shared/routeAnimation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [routeAnimationState],
})
export class HomeComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
}
