import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-discount-bar',
  imports: [NgForOf],
  templateUrl: './discount-bar.component.html',
  styleUrls: ['./discount-bar.component.css']
})
export class DiscountBarComponent {
  // The text to scroll
  text = 'FREE SHIPPING ON ORDER $35+';

  // Dynamically create multiple copies for scrolling
  texts: string[] = [];

  constructor() {
    // Push the same text multiple times to create an effect of continuous scrolling
    for (let i = 0; i < 10; i++) {
      this.texts.push(this.text);
    }
  }
}
