import { Component, signal } from '@angular/core';
import { CountryService } from '../../services/country';
import { Country } from '../../interfaces/country.interface';
import { NotFound } from '../../../shared/not-found/not-found';
import { CountrySearchInputComponent } from '../../components/country-search-input/country-search-input';
import { CountryList } from '../../components/country-list/country-list';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.html',
  imports: [NotFound, CountrySearchInputComponent, CountryList],
})
export class CountryPage {
  countries = signal<Country[]>([]);
  isError = signal(false);

  constructor(private countryService: CountryService) {}

  onSearch(term: string) {
    this.isError.set(false);

    this.countryService.searchByCountry(term).subscribe({
      next: (resp) => {
        this.countries.set(resp);
        if (resp.length === 0) {
          this.isError.set(true);
        }
      },
      error: () => this.isError.set(true),
    });
  }
}
