import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  templateUrl: './country-search-input.html',
})
export class CountrySearchInputComponent {
  @Output() value = new EventEmitter<string>();

  onInputChange(term: string) {
    this.value.emit(term); // emite un string
  }
}
