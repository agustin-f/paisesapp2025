import { Component, input, signal } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-list',
  imports: [],
  templateUrl: './country-list.html',
  styleUrl: './country-list.scss',
})
export class CountryList {
  countries = input.required<Country[]>();
}
