import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {BackdropService} from '../backdrop.service';
@Component({
  selector: 'app-header-leftbar',
  imports: [
    NgClass
  ],
  templateUrl: './header-leftbar.component.html',
  styleUrl: './header-leftbar.component.css',
  providers: [BackdropService],
})
export class HeaderLeftbarComponent {
  isOpen: boolean = false;
  animation: boolean = false;
  showBackdrop: boolean = false;

  constructor(private backdropService: BackdropService) {}

  ngOnInit() {
    this.backdropService.backdropState.subscribe((state) => {
      this.showBackdrop = state;
    });
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
  }
}
