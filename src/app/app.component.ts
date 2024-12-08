import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pr-root',
  templateUrl: './app.component.html',
  imports: [MenuComponent, RouterModule]
})
export class AppComponent {
  onNewRace(): void {
    alert('New race is ready');
  }
}
