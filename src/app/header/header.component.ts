import { Component } from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {HeaderLeftbarComponent} from '../header-leftbar/header-leftbar.component';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    HeaderLeftbarComponent,
    NgIf,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isSearch: boolean = false;
  toggleSearch() {
    this.isSearch = !this.isSearch; // Hides the content
  }

  isCartOpen: boolean = false;
  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }
}
