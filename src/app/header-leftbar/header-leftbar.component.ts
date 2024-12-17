import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
@Component({
  selector: 'app-header-leftbar',
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './header-leftbar.component.html',
  styleUrl: './header-leftbar.component.css'
})
export class HeaderLeftbarComponent {
  isOpen: boolean = false;
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
