import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-feature-list-item',
  imports: [],
  templateUrl: './product-feature-list-item.component.html',
  styleUrl: './product-feature-list-item.component.css'
})
export class ProductFeatureListItemComponent {
  @Input() description !: string;
  @Input() url !: string;
  @Input() btnText !: string;
}
