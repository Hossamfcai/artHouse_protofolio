import { animate, style, transition, trigger } from '@angular/animations';

export const routeAnimationState = trigger('routeAnimationTrigger', [
  transition(':enter', [style({ opacity: 0 }), animate(700)]),
  transition(':leave', [animate(0), style({ opacity: 0 })]),
]);
