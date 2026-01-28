import { Routes } from '@angular/router';
import { ByCapitalPage } from './country/components/by-capital-page/by-capital-page';

export const routes: Routes = [
  {
    path: '',
    component: ByCapitalPage,
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
