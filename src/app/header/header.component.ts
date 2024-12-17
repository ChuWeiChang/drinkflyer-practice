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
  isContentVisible: boolean = true;

  clearContainer() {
    this.isContentVisible = false; // Hides the content
  }
}
