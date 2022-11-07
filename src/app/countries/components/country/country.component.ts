import { Component, OnInit } from '@angular/core';
import { CountriesDataService } from '../../services/countries-data.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

    public currentCountryIndex: number = 0;

    constructor(public countriesData : CountriesDataService) { }

    ngOnInit(): void {
    }

    public onSwitchCountry(isNext: boolean) : void {
        if(isNext) {
            if(this.currentCountryIndex + 1 >= this.countriesData.countries.length) {
                this.currentCountryIndex = 0;
            }
            else {
                this.currentCountryIndex++;
            }
        }
        else {
            if(this.currentCountryIndex <= 0) {
                this.currentCountryIndex = this.countriesData.countries.length - 1;
            }
            else {
                this.currentCountryIndex--;
            }
        }
            
    }

}
