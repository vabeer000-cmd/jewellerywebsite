import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss'
})
export class CollectionsComponent {

  
  collections = [
    {
      title: 'Diamond Collection',
      subtitle: 'Timeless brilliance crafted for elegance.',
      image: '/images/muhammad-mousavi-5Lll5zmefSg-unsplash.jpg'
    },
    {
      title: 'Royal Gold',
      subtitle: 'Luxury inspired by royal heritage.',
      image: 'images/royalgold.avif'
    },
    {
      title: 'Bridal Elegance',
      subtitle: 'Celebrate unforgettable moments beautifully.',
      image: 'images/bridal_elegance.avif'
    }
  ];

}