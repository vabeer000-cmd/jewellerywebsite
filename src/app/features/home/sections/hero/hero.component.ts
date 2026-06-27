import { Component } from '@angular/core';
import { LuxuryButtonComponent } from '../../../../shared/components/luxury-button/luxury-button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LuxuryButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}