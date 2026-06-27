import { Component, input } from '@angular/core';

@Component({
  selector: 'app-luxury-button',
  standalone: true,
  imports: [],
  templateUrl: './luxury-button.component.html',
  styleUrl: './luxury-button.component.scss'
})
export class LuxuryButtonComponent {

  text = input('');
  outline = input(false);

}