import { Routes } from '@angular/router';
import { ByCapitalPage } from './components/by-capital-page/by-capital-page';
import { CountryPage } from './pages/country-page/country-page';
import { CountryLayout } from './layouts/country-layout/country-layout';

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
