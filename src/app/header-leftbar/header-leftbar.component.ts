import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {BackdropModule} from '../backdrop/backdrop.module';
@Component({
  selector: 'app-header-leftbar',
  imports: [
    NgClass,
    BackdropModule
  ],
  templateUrl: './header-leftbar.component.html',
  styleUrl: './header-leftbar.component.css',
  providers: [BackdropModule],
})
export class HeaderLeftbarComponent {
  isOpen: boolean = false;
  animation: boolean = false;
  showBackdrop: boolean = false;

  constructor(private backdropModule: BackdropModule) {}

  ngOnInit() {
    this.backdropModule.backdropState.subscribe((state) => {
      this.showBackdrop = state;
    });
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.animation = true;
      this.backdropModule.openBackdrop();
    } else {
      this.backdropModule.closeBackdrop();
      setTimeout(() => {
        this.animation = false;
      }, 500); // 500 milliseconds
    }
  }
}
