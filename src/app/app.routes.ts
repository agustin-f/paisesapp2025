import { Routes } from '@angular/router';
import { HomePage } from './country/shared/pages/home-page/home-page';
import { NotFound } from './shared/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },

  {
    path: 'country',
    loadChildren: () => import('../app/country/country.routes').then((m) => m.countryRoutes),
  },

  {
    path: '**',
    component: NotFound,
  },
];
