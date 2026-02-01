import { Routes } from '@angular/router';
import { CountryLayout } from './layouts/country-layout/country-layout';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { ByRegionPage } from './pages/by-region-page/by-region-page';
import { CountryPage } from './pages/by-country-page/country-page';
import { CountryDetalPage } from './pages/country-detal-page/country-detal-page';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      { path: 'by-capital', component: ByCapitalPage },
      { path: 'by-country', component: CountryPage },
      { path: 'by-region', component: ByRegionPage },

  
      { path: 'by-country/:code', component: CountryDetalPage },

      { path: '', redirectTo: 'by-capital', pathMatch: 'full' },
      { path: '**', redirectTo: 'by-capital' },
    ],
  },
];

export default countryRoutes;
