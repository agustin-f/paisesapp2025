import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetalPage } from './country-detal-page';

describe('CountryDetalPage', () => {
  let component: CountryDetalPage;
  let fixture: ComponentFixture<CountryDetalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDetalPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryDetalPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
