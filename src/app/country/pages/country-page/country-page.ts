import { Component, inject, resource } from '@angular/core'; // Usamos resource
import { firstValueFrom } from 'rxjs'; // Para convertir el observable
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country';
import { rxResource } from '@angular/core/rxjs-interop';
import { NotFound } from '../../shared/components/not-found/not-found';
import { CountryInformation } from './country-information/country-information';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.html',
  styleUrl: './country-page.scss',
  imports: [NotFound, CountryInformation],
})
export class CountryPage {
  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  countryResource = resource({
    params: () => ({ code: this.countryCode as string }),

    loader: ({ params }) => {
      return firstValueFrom(this.countryService.searchCountryByAlphaCode(params.code));
    },
  });
}
