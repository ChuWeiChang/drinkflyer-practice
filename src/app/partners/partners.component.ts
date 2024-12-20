import { Component } from '@angular/core';
import {NgOptimizedImage, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-partners',
  imports: [
    NgOptimizedImage,
    UpperCasePipe
  ],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
  dir_path = 'assets/images/partners/';
  items = [
    { id:"RollingStones", filename: 'flyers_logobank-13.png', },
    { id:"Forbes", filename: 'flyers_logobank-11.png', },
    { id:"InsideHook", filename: 'flyers_logobank-12.png', },
    { id:"Bloomberg", filename: 'flyers_logobank-14.png', },
    { id:"Gotham", filename: 'flyers_logobank-10.png', },
  ];
}
