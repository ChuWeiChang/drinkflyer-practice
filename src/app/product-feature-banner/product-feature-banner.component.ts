import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-product-feature-banner',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './product-feature-banner.component.html',
  styleUrl: './product-feature-banner.component.css'
})
export class ProductFeatureBannerComponent {
  dir_path = 'assets/images/product-feature-banner/';
  url1 = this.dir_path + 'Flyers_RTB_Icons_For_Web.png';
  url2 = this.dir_path +'LP_Comparison_Table-01.png';
}
