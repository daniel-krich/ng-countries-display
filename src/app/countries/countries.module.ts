import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './components/country/country.component';
import { CountriesNavigationComponent } from './components/countries-navigation/countries-navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryImageComponent } from './components/country-image/country-image.component';
import { CountryListComponent } from './components/country-list/country-list.component';

@NgModule({
  declarations: [
    CountryComponent,
    CountriesNavigationComponent,
    CountryImageComponent,
    CountryListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [CountryComponent, CountryListComponent]
})
export class CountriesModule { }
