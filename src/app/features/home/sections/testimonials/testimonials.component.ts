import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  testimonials = [
    {
      name: 'Sophia Williams',
      role: 'Fashion Influencer',
      review:
        'Absolutely breathtaking craftsmanship. Every piece feels timeless and luxurious.',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Emma Johnson',
      role: 'Bride',
      review:
        'The bridal collection made my special day unforgettable. Stunning quality and design.',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Olivia Brown',
      role: 'Entrepreneur',
      review:
        'Luxury, elegance, and perfection. The jewellery truly stands out beautifully.',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
    }
  ];

}