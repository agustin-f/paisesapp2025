import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/country-search-input/country-search-input';
import { CountryList } from '../../components/country-list/country-list';
import { Country } from '../../services/country';
import { RESTCountry } from '../../interfaces/rest-countries.interfaces';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryList],
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css',
})
export class ByCapitalPage {
  countryService = inject(Country);

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<RESTCountry[]>([]);

  onSearch(query: string) {
    if (this.isLoading()) {
      return;
    }

    this.isLoading.set(true);

    this.countryService.searchByCapital(query).subscribe((countries) => {
      this.isLoading.set(false);
      this.countries.set(countries);
      console.log(countries);
    });
  }
}
