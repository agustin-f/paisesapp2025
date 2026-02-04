import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/country-search-input/country-search-input';
import { CountryList } from '../../components/country-list/country-list';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country';
import { firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  imports: [CountryList, SearchInputComponent],
  templateUrl: './by-country-page.html',
  styleUrl: './by-country-page.css',
})
export class ByCountryPage {
  countryService = inject(CountryService);
  query = signal('');

  countryResource = resource({
    params: () => ({ query: this.query() }),
    loader: async ({ params }) => {
      if (!params.query) return [];

      return await firstValueFrom(this.countryService.searchByCapital(params.query));
    },
  });
}
