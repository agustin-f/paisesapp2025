import { Component, input, signal } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list.html',
  styleUrl: './country-list.scss',
})
export class CountryList {
  countries = input.required<Country[]>();

  errorMessage = input<string | unknown | null>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
}
