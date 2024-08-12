import { Component, HostBinding } from '@angular/core';
import { routeAnimationState } from '../../../shared/routeAnimation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [routeAnimationState],
})
export class AboutComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
}
