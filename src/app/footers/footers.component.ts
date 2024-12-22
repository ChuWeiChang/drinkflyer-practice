import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-footers',
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './footers.component.html',
  styleUrl: './footers.component.css'
})
export class FootersComponent {
  imgSrc:string = "assets/images/footers/Flyers_Monogram.png"

}
