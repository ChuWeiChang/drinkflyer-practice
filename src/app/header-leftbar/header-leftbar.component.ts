import {Component, inject, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import {BackdropService} from '../backdrop.service';
@Component({
  selector: 'app-header-leftbar',
  imports: [
    NgClass,
  ],
  templateUrl: './header-leftbar.component.html',
  styleUrl: './header-leftbar.component.css',
})
export class HeaderLeftbarComponent implements OnInit {
  isOpen: boolean = false;
  animation: boolean = false;
  showBackdrop: boolean = false;
  backdropService = inject(BackdropService);

  ngOnInit() {
    this.showBackdrop = this.backdropService.backdropState();
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.animation = true;
      this.backdropService.openBackdrop();
    } else {
      this.backdropService.closeBackdrop();
      setTimeout(() => {
        this.animation = false;
      }, 500); // 500 milliseconds
    }
    this.showBackdrop = this.backdropService.backdropState();
  }
}
