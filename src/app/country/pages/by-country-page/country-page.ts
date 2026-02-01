import { Component, inject, signal } from '@angular/core';
import { CountryService } from '../../services/country';
import { Country } from '../../interfaces/country.interface';
import { SearchInputComponent } from '../../components/country-search-input/country-search-input';
import { CountryList } from '../../components/country-list/country-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-page',
  imports: [CountryList, SearchInputComponent],
  templateUrl: './country-page.html',
  styleUrl: './country-page.css',
})
export class CountryPage {
  constructor(private countryservice: CountryService) {}

  countryService = inject(CountryService);

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(query: string) {
    if (this.isLoading()) {
      return;
    }

    this.isLoading.set(true);

    this.countryService.searchByCountry(query).subscribe({
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
