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
    { name: 'THC Ol\' Fashioned', review: 633, price:35, filename: 'OlFashionedCloseUp-2WEB.png', filenameOnHover: 'Flyers-Cocktail-Company---Ol_-Fashioned-Iced-Can-Render-2024-WEB-1x1.png'},
    { name: 'THC MarGarita', review: 633, price:35, filename: 'MargaritaCloseUp-1Web1x1V3.png', filenameOnHover: 'Flyers-Cocktail-Company---Margarita-Iced-Can-Render-2024-WEB-1x1'},
    { name: 'THC House Cocktail flight', review: 633, price:35, filename: 'Sunset_Spritz_Family_Hero_-_4_-_WEB.png', filenameOnHover: 'Flyers_Cocktail_Co_Sunset_Spritz_THC_Can_Family_V1_-_WEB.png'},
  ];
}
