import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instagram-showcase',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './instagram-showcase.component.html',
  styleUrl: './instagram-showcase.component.scss'
})
export class InstagramShowcaseComponent {

  images = [
    'images/earrings_on_stone.avif',
    'images/royalgold.avif',
    'images/bridal_elegance.avif',
    'images/photo-1611652022419-a9419f74343d.avif',
    'images/photo-1535632066927-ab7c9ab60908.avif',
    'images/photo-1515562141207-7a88fb7ce338.avif',
    'images/photo-1626122509259-ea8e0a136ada.avif',
    'images/photo-1692421098809-6cdfcfea289a.avif',
    'images/photo-1690175867343-2af70ea57537.avif'
  ];

}