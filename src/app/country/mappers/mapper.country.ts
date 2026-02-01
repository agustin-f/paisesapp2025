import type { Country } from '../interfaces/country.interface';
import type { RESTCountry } from '../interfaces/rest-countries.interfaces';

export class CountryMapper {
  // static RestCountry => Country
  static mapRestCountryToCountry(country: RESTCountry): Country {
    return {
      cca2: country.cca2,
      name: country.name.common,
      capital: country.capital?.[0] ?? 'N/A',
      region: country.region,
      subRegion: country.subregion,
      population: country.population,
      flag: country.flag,
      flagSvg: country.flags.svg,
    };
  }

  // static RestCountry[] => Country[]
  static mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(this.mapRestCountryToCountry);
  }
}
