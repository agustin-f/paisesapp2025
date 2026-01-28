import { Component } from '@angular/core';
import { CountrySearchInput } from '../country-search-input/country-search-input';
import { CountryList } from '../country-list/country-list';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css',
})
export class ByCapitalPage {}
