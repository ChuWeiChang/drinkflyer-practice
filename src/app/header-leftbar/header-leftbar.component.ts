import { Component } from '@angular/core';

@Component({
  selector: 'app-header-leftbar',
  imports: [],
  templateUrl: './header-leftbar.component.html',
  styleUrl: './header-leftbar.component.css'
})
export class HeaderLeftbarComponent {
  toggleSidebar() {
    // Logic to open/close sidebar
    console.log('Sidebar toggled');
    // You could add a boolean variable here to manage sidebar visibility
  }
}
