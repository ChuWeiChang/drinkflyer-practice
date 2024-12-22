import { Component } from '@angular/core';
import {NgOptimizedImage, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-footers',
  imports: [
    NgOptimizedImage,
    UpperCasePipe,
  ],
  templateUrl: './footers.component.html',
  styleUrl: './footers.component.css'
})
export class FootersComponent {
  imgSrc:string = "assets/images/footers/Flyers_Monogram.png"

}
