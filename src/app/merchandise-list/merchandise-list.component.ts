import { Component } from '@angular/core';
import {MerchandiseItemComponent} from '../merchandise-item/merchandise-item.component';

@Component({
  selector: 'app-merchandise-list',
  imports: [
    MerchandiseItemComponent
  ],
  templateUrl: './merchandise-list.component.html',
  styleUrl: './merchandise-list.component.css'
})
export class MerchandiseListComponent {
  dir_path = 'assets/images/merchandise-list/';
  items = [
    { name: 'THC Apéro Spritz', review: 633, price:35, filename: 'AperoSpritzCloseUp-1WEB.png', filenameOnHover: 'Flyers-Cocktail-Company---Apero-Spritz-Iced-Can-Render-2024-WEB-1x1-V2.png'},
    { name: 'THC Apéro Spritz1', review: 633, price:35, filename: 'AperoSpritzCloseUp-1WEB.png', filenameOnHover: 'Flyers-Cocktail-Company---Apero-Spritz-Iced-Can-Render-2024-WEB-1x1-V2.png'},

  ];
}
