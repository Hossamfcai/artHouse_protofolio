import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isFixed = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position and toggle the isFixed property
    this.isFixed = window.pageYOffset > 270; // Adjust the offset as needed
  }
}
