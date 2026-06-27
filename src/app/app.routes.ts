
import { Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

import { HomeComponent } from './features/home/pages/home/home.component';
import { CollectionsPageComponent } from './features/collections/pages/collections-page/collections-page.component';
import { AboutPageComponent } from './features/about/pages/about-page/about-page.component';
import { ContactPageComponent } from './features/contact/pages/contact-page/contact-page.component';

export const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent,

    children: [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

      {
        path: 'home',
        component: HomeComponent
      },

      {
        path: 'collections',
        component: CollectionsPageComponent
      },

      {
        path: 'about',
        component: AboutPageComponent
      },

      {
        path: 'contact',
        component: ContactPageComponent
      }

    ]

  },

  {
    path: '**',
    redirectTo: ''
  }

];