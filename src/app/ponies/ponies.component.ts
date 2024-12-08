import { Component, input } from '@angular/core';

@Component({
  selector: 'pr-ponies',
  imports: [],
  templateUrl: './ponies.component.html',
  styleUrl: './ponies.component.css'
})
export class PoniesComponent {
  ponyModel = input.required();
}
