import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { CountryPage } from './pages/by-country-page/country-page';
import { CountryLayout } from './layouts/country-layout/country-layout';
import { ByRegionPage } from './pages/by-region-page/by-region-page';

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
        component: CountryPage,
      },
      {
        path: 'by-region',
        component: ByRegionPage,
      },

      {
        path: 'by/:code',
        component: CountryPage,
      },

      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default countryRoutes;
