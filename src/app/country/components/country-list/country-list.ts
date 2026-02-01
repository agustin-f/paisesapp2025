import { Component, input, signal } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CountryPage } from '../../pages/by-country-page/country-page';

@Component({
  selector: 'app-country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list.html',
  styleUrl: './country-list.scss',
})
export class CountryList {
  countries = input.required<Country[]>();
}
