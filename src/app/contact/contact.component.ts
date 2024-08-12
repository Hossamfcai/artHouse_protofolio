import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routeAnimationState } from '../../../shared/routeAnimation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [routeAnimationState],
})
export class ContactComponent implements OnInit {
  constructor(private _route: Router) {}
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  myForm!: FormGroup;
  submited: boolean = false;
  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null),
      note: new FormControl(null, Validators.required),
    });
  }
  loading() {
    setTimeout(() => {
      this.submited = false;
      this._route.navigate(['/home']);
    }, 3000);
  }
  submitForm() {
    console.log(this.myForm);
    this.submited = true;
    this.loading();
  }
}
