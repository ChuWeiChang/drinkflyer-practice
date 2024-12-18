import {afterNextRender, Component, HostListener} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-hero-banner',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css'
})
export class HeroBannerComponent {
  displaySticker = false;
  imgSrc = '';
  windowSizeConfirmed = false;
  constructor() {
    afterNextRender(() => {
      this.updateImageSrc();
      this.windowSizeConfirmed = true;
    });
  }
  @HostListener('window:resize')
  onResize() {
    this.updateImageSrc();
  }
  updateImageSrc() {
    if (window.innerWidth < 1000) {
      this.imgSrc = 'assets/images/hero-banner/HolidayGlasses_heromobile_b5bd2263-4964-40d8-ac2d-281a22a84b4b.png';
      this.displaySticker = false;
    } else {
      this.imgSrc = 'assets/images/hero-banner/HolidayGlasses_heroimage_2.png';
      this.displaySticker = true;
    }
  }
}
