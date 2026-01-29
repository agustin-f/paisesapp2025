import { Component, input, signal } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countries.interfaces';

@Component({
  selector: 'app-country-list',
  imports: [],
  templateUrl: './country-list.html',
  styleUrl: './country-list.scss',
})
export class CountryList {
  countries = input.required<RESTCountry[]>();
}
