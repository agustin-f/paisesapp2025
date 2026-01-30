import { Routes } from '@angular/router';
<<<<<<< HEAD
import { HomePage } from './shared/pages/home-page/home-page';
=======
import { HomePage } from './country/shared/pages/home-page/home-page';
>>>>>>> 31a2ae41d6cfbb445de99d5245a6828761befe1c

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },

  {
    path: 'country',
    loadChildren: () => import('./country/country.routes'), //.then(m => m.countryRoutes)
  },

  {
    path: '**',
    redirectTo: '',
  },
];
