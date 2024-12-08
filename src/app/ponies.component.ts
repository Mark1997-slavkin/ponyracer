import { Component, signal } from '@angular/core';

@Component({
  selector: 'pr-ponies',
  template: `
    <button (click)="refreshPonies()">Refresh</button>
    <ul>
      @for (pony of ponies(); track pony.id) {
        <li [style.color]="$even ? 'green' : 'black'">{{ pony.name }}</li>
      }
    </ul>
  `,
  imports: []
})
export class PoniesComponent {
  ponies = signal<Array<RaceModel>>([
    { id: 1, name: 'Rainbox Dash' },
    { id: 2, name: 'Pinkie Pie' }
  ]);
  refreshPonies(): void {
    this.ponies.set([
      { id: 3, name: 'Fluttershy' },
      { id: 4, name: 'Rarity' }
    ]);
  }
}
