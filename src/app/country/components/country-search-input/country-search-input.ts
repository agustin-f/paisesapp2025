import { Component } from '@angular/core';

@Component({
  selector: 'app-country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
  styleUrl: './country-search-input.scss',
})
export class CountrySearchInput {
  onSearch(value: string) {
    console.log(value);
  }
}
