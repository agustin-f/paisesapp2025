import { Component } from '@angular/core';
import { SearchInputComponent } from '../../components/country-search-input/country-search-input';
import { CountryList } from '../../components/country-list/country-list';
import { CountryService } from '../../services/country';

@Component({
  selector: 'app-country-page',
  imports: [SearchInputComponent, CountryList],
  templateUrl: './country-page.html',
  styleUrl: './country-page.css',
})
export class CountryPage {
  constructor(private countryservice: CountryService) {}
}
