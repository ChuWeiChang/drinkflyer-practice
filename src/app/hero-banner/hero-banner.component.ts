import {Component} from '@angular/core';
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
  imgSrcSmall = 'assets/images/hero-banner/HolidayGlasses_heromobile_b5bd2263-4964-40d8-ac2d-281a22a84b4b.png';
  imgSrcBig = 'assets/images/hero-banner/HolidayGlasses_heroimage_2.png'
}
