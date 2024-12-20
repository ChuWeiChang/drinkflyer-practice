import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-product-feature-list-item',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './product-feature-list-item.component.html',
  styleUrl: './product-feature-list-item.component.css'
})
export class ProductFeatureListItemComponent {
  @Input() description !: string;
  @Input() url !: string;
  @Input() btnText !: string;
}
