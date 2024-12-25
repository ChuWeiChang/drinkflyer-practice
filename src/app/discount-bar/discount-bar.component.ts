import { Component } from '@angular/core';

@Component({
  selector: 'app-discount-bar',
  templateUrl: './discount-bar.component.html',
  styleUrls: ['./discount-bar.component.css']
})
export class DiscountBarComponent {
  text = 'FREE SHIPPING ON ORDER $35+';
  texts: { id: number, string: string }[] = [];

  constructor() {
    for (let i = 0; i < 15; i++) {
      this.texts.push({ id: i, string: this.text });
    }
  }
}
