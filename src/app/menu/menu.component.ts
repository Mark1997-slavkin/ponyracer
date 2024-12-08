import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pr-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  navbarCollapsed = signal<boolean>(true);

  toggleNavbar() {
    this.navbarCollapsed.set(!this.navbarCollapsed());
  }
}
