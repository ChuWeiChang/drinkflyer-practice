import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-merchandise-item',
  imports: [
    NgOptimizedImage,
    CurrencyPipe
  ],
  templateUrl: './merchandise-item.component.html',
  styleUrl: './merchandise-item.component.css'
})
export class MerchandiseItemComponent {
  @Input() name!: string;
  @Input() url!: string;
  @Input() urlOnHover!: string;
  @Input() reviews !: number;
  @Input() price !: number;

  ori_url ="";
  constructor() {}

  ngOnInit(): void {
    this.ori_url = this.url;
  }
  onHover(): void {
    this.url = this.urlOnHover;
  }

  onMouseOut(): void {
    this.url = this.ori_url;
  }


}
