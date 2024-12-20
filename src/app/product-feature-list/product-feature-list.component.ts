import {Component} from '@angular/core';
import {ProductFeatureListItemComponent} from '../product-feature-list-item/product-feature-list-item.component';

@Component({
  selector: 'app-product-feature-list',
  imports: [
    ProductFeatureListItemComponent
  ],
  templateUrl: './product-feature-list.component.html',
  styleUrl: './product-feature-list.component.css'
})
export class ProductFeatureListComponent {
  dir_path = 'assets/images/product-feature-list/';
  items = [
    { id:1, description: 'Wind down with a high-end cocktail crafted to lift your mood without overstaying its welcome.', btnText: 'take the edge off', filename: 'Flyers_EdgeOff.png', },
    { id:2, description: 'Enjoy anxiety-free moments with a sense of ease infused into each sip of a THC Flyers cocktail.', btnText: 'embrace the moment', filename: 'Flyers_MargCheers.png', },
    { id:3, description: 'Elevate your drinking ritual with bartender flavors expertly crafted with 5MG of Hemp-Derived THC.', btnText: 'savor sophistication', filename: 'Flyers_Savor.png', },
  ];
}
