import { Component } from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {HeaderLeftbarComponent} from '../header-leftbar/header-leftbar.component';
import { BackdropModule } from '../backdrop/backdrop.module';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    HeaderLeftbarComponent,
    NgIf,
    NgClass,
    BackdropModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [BackdropModule],
})
export class HeaderComponent {
  isCartOpen: boolean = false;
  animation: boolean = false;
  isSearch: boolean = false;
  showBackdrop: boolean = false;
  constructor(private backdropModule: BackdropModule) {}

  ngOnInit() {
    this.backdropModule.backdropState.subscribe((state) => {
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
      this.backdropModule.openBackdrop();
    } else{
      this.backdropModule.closeBackdrop();
      setTimeout(() => {this.animation = !this.animation;}, 500); // 2000 milliseconds = 2 seconds
    }
  }
}
