import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { CountryLayout } from './layouts/country-layout/country-layout';
import { ByRegionPage } from './pages/by-region-page/by-region-page';
import { ByCountryPage } from './pages/by-country-page/by-country-page';
import { CountryPage } from './pages/by-country-page/country-page';
import { NotFound } from '../shared/not-found/not-found';
import { CountryPageComponent } from './pages/country-page/country-page';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPage,
      },
      {
        path: 'by-country',
        component: ByCountryPage,
      },

      {
        path: 'by/:code',
        component: CountryPageComponent,
      },

      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default countryRoutes;
