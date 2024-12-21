import { Component } from '@angular/core';
import {NgOptimizedImage, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-secondary-hero-banner',
  imports: [
    UpperCasePipe,
    NgOptimizedImage
  ],
  templateUrl: './secondary-hero-banner.component.html',
  styleUrl: './secondary-hero-banner.component.css'
})
export class SecondaryHeroBannerComponent {
  imgSrc = 'assets/images/secondary-hero-banner/SunsetSpritzFamilyLifestyle-WEB.png'

}
