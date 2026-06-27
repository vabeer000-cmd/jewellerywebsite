import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { CollectionsComponent } from '../../sections/collections/collections.component';
import { BestSellersComponent } from '../../sections/best-sellers/best-sellers.component';
import { TestimonialsComponent } from '../../sections/testimonials/testimonials.component';
import { InstagramShowcaseComponent } from '../../sections/instagram-showcase/instagram-showcase.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    // NavbarComponent,
    HeroComponent,
    CollectionsComponent,
    BestSellersComponent,
    TestimonialsComponent,
    InstagramShowcaseComponent,
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ngOnInit() {
    console.log('Home INIT');
  }

  ngOnDestroy() {
    console.log('Home DESTROY');
  }
}