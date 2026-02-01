import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import type { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/mapper.country';
import { RESTCountry } from '../interfaces/rest-countries.interfaces';
import { of } from 'rxjs';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      catchError((error) => {
        console.log('Error fetching ', error);
        return throwError(() => new Error(`No se pudo obtener países con ese query ${query}`));
      }),
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const url = `${API_URL}/name/${query}`;
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(url).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      delay(2000),
      catchError((error) => {
        console.log('Error fetching ', error);
        return of([]); // <- importante: siempre emite algo
      }),
    );
  }

  searchCountryByAlphaCode(code: string): Observable<Country> {
    const url = `${API_URL}/alpha/${code}`;

    return this.http.get<RESTCountry[]>(url).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      map((countries) => countries[0]),
      catchError((error) => {
        console.log('Error fetching ', error);
        return throwError(() => new Error(`No se pudo obtener país con ese código ${code}`));
      }),
    );
  }
}
