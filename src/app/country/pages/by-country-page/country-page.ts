import { Component } from '@angular/core';
import { CountryService } from '../../services/country';

@Component({
  selector: 'app-country-page',
  imports: [],
  templateUrl: './country-page.html',
  styleUrl: './country-page.css',
})
export class CountryPage {
  constructor(private countryservice: CountryService) {}
}
