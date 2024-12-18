import {Component} from '@angular/core';
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
  animation: boolean = false;
  toggleSidebar() {
    this.isOpen = !this.isOpen;
    if (this.isOpen){
      this.animation = !this.animation;
    } else{
      setTimeout(() => {this.animation = !this.animation;}, 500); // 2000 milliseconds = 2 seconds
    }
  }
}
