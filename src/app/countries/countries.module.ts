import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './components/country/country.component';
import { CountriesNavigationComponent } from './components/countries-navigation/countries-navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryImageComponent } from './components/country-image/country-image.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { NumberFormatterPipe } from './pipes/number-formatter.pipe';
import { CountriesDataService } from './services/countries-data.service';
import { CountriesFilterControllerComponent } from './components/countries-filter-controller/countries-filter-controller.component';
import { FormsModule } from '@angular/forms';
import { CountriesSearchFilterPipe } from './pipes/countries-search-filter.pipe';

@NgModule({
  declarations: [
    CountryComponent,
    CountriesNavigationComponent,
    CountryImageComponent,
    CountryListComponent,
    NumberFormatterPipe,
    CountriesFilterControllerComponent,
    CountriesSearchFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CountriesDataService],
  exports: [CountryComponent, CountryListComponent]
})
export class CountriesModule { }