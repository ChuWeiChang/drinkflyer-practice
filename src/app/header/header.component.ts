import {Component, OnInit} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {HeaderLeftbarComponent} from '../header-leftbar/header-leftbar.component';
import { BackdropService } from '../backdrop.service';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    HeaderLeftbarComponent,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit{
  isCartOpen: boolean = false;
  animation: boolean = false;
  isSearch: boolean = false;
  showBackdrop: boolean = false;
  constructor(private backdropService: BackdropService) {}

  ngOnInit() {
    this.backdropService.backdropState.subscribe((state) => {
      this.showBackdrop = state;
    });
  }

  toggleSearch() {
    this.isSearch = !this.isSearch; // Hides the content
  }


  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
    if (this.isCartOpen){
      this.animation = !this.animation;
      this.backdropService.openBackdrop();
    } else{
      this.backdropService.closeBackdrop();
      setTimeout(() => {this.animation = !this.animation;}, 500); // 2000 milliseconds = 2 seconds
    }
  }
}
