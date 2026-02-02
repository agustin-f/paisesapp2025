import { Country } from './../../interfaces/country.interface';
import { CountryList } from '../../components/country-list/country-list';
import { CountryMapper } from '../../mappers/mapper.country';
import { CountryService } from '../../services/country';
import { RESTCountry } from '../../interfaces/rest-countries.interfaces';
import { Component, inject, signal } from '@angular/core';
import {
  SearchInputComponent,
  CountrySearchInputComponent,
} from '../../components/country-search-input/country-search-input';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryList, CountrySearchInputComponent],
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css',
})
export class ByCapitalPage {
  countryService = inject(CountryService);

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(query: string) {
    if (this.isLoading()) {
      return;
    }

    this.isLoading.set(true);

    this.countryService.searchByCapital(query).subscribe({
      next: (countries) => {
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.countries.set([]);
        this.isError.set('No se encontró un país con esa capital');
      },
    });
  }
}
