// import { CommonModule } from '@angular/common';
// import { Component, signal } from '@angular/core';

// @Component({
//   selector: 'app-best-sellers',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './best-sellers.component.html',
//   styleUrl: './best-sellers.component.scss'
// })
// export class BestSellersComponent {
//   currentIndex = signal(0);

//   products = [
//     {
//       name: 'Diamond Ring',
//       price: '$2,499',
//       image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop'
//     },
//     {
//       name: 'Luxury Necklace',
//       price: '$3,199',
//       image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop'
//     },
//     {
//       name: 'Royal Earrings',
//       price: '$1,899',
//       image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop'
//     },
//     {
//       name: 'Golden Bracelet',
//       price: '$2,099',
//       image: 'https://images.unsplash.com/photo-1625516152414-8f33eef3d660?q=80&w=1200&auto=format&fit=crop'
//     }
//   ];

//   next(): void {
//     this.currentIndex.update(index =>
//       index === this.products.length - 1 ? 0 : index + 1
//     );
//   }

//   previous(): void {
//     this.currentIndex.update(index =>
//       index === 0 ? this.products.length - 1 : index - 1
//     );
//   }
// }
import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  signal
} from '@angular/core';

interface Product {
  name: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-best-sellers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.scss'
})
export class BestSellersComponent implements OnInit, OnDestroy {

  readonly cardWidth = 440;
  readonly gap = 40;

  currentIndex = signal(0);

  private autoplayId!: ReturnType<typeof setInterval>;

  private touchStartX = 0;
  private touchEndX = 0;

  products: Product[] = [
    {
      name: 'Diamond Ring',
      price: '$2,499',
      image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Luxury Necklace',
      price: '$3,199',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Royal Earrings',
      price: '$1,899',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Golden Bracelet',
      price: '$2,099',
      image: 'https://images.unsplash.com/photo-1625516152414-8f33eef3d660?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Pearl Collection',
      price: '$2,799',
      image: 'https://images.unsplash.com/photo-1625516152414-8f33eef3d660?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoplayId);
  }

  next(): void {

    this.currentIndex.update(i =>
      (i + 1) % this.products.length
    );

  }

  previous(): void {

    this.currentIndex.update(i =>
      i === 0
        ? this.products.length - 1
        : i - 1
    );

  }

  goTo(index: number): void {

    this.currentIndex.set(index);

    this.restartAutoplay();

  }

  getTranslate(): string {

    const move =
      this.currentIndex() *
      (this.cardWidth + this.gap);

    return `translateX(calc(50% - ${move}px - ${this.cardWidth / 2}px))`;

  }

  isActive(index: number): boolean {

    return index === this.currentIndex();

  }

  startAutoplay(): void {

    this.autoplayId = setInterval(() => {

      this.next();

    }, 3500);

  }

  restartAutoplay(): void {

    clearInterval(this.autoplayId);

    this.startAutoplay();

  }

  @HostListener('touchstart', ['$event'])
  touchStart(event: TouchEvent): void {

    this.touchStartX =
      event.changedTouches[0].clientX;

  }

  @HostListener('touchend', ['$event'])
  touchEnd(event: TouchEvent): void {

    this.touchEndX =
      event.changedTouches[0].clientX;

    if (this.touchStartX - this.touchEndX > 50) {

      this.next();

    }

    if (this.touchEndX - this.touchStartX > 50) {

      this.previous();

    }

  }

}