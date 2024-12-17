import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {HeaderLeftbarComponent} from '../header-leftbar/header-leftbar.component';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    HeaderLeftbarComponent,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isSearch: boolean = false;

  searchClick() {
    this.isSearch = true; // Hides the content
  }
  leaveSearch() {
    this.isSearch = false; // Shows the content
  }
}
