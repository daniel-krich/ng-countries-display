import { Component, OnInit } from '@angular/core';
import { CountriesDataService } from '../../services/countries-data.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

    constructor(public countriesData : CountriesDataService) { }

    ngOnInit(): void {
    }

}
