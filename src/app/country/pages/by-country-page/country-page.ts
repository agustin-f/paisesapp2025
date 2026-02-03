import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/country-search-input/country-search-input';
import { CountryList } from '../../components/country-list/country-list';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country';
import { firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-country-page',
  imports: [CountryList, SearchInputComponent],
  templateUrl: './country-page.html',
  styleUrl: './country-page.css',
})
export class CountryPage {
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
