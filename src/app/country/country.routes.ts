import { Routes } from '@angular/router';
import { ByCapitalPage } from './components/by-capital-page/by-capital-page';
import { CountryPage } from './pages/country-page/country-page';
import { Home } from '../../../../bases/src/app/pages/home/home';

export const countryRoutes: Routes = [
  {
    path: '',
    component: Home,
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
