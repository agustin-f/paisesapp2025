import { Routes } from '@angular/router';
import { CountryLayout } from './layouts/country-layout/country-layout';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { ByRegionPage } from './pages/by-region-page/by-region-page';
import { CountryPage } from './pages/by-country-page/country-page';
import { NotFound } from '../shared/not-found/not-found';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      { path: 'by-capital', component: ByCapitalPage },
      { path: 'by-country', component: CountryPage },
      { path: 'by-region', component: ByRegionPage },

      { path: '', redirectTo: 'by-capital', pathMatch: 'full' },
      { path: '**', component: NotFound },
    ],
  },
];

export default countryRoutes;
