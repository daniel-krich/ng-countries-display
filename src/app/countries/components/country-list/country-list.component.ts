import { Component, OnInit } from '@angular/core';
import { CountriesDataService } from '../../services/countries-data.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

    public searchInput: string = '';
    public flipToggle: boolean = true;

    constructor(public countriesData : CountriesDataService) { }

    ngOnInit(): void { }

    public onSearchInputChanged(searchInput: string) : void {
        this.searchInput = searchInput;
    }

    public onFlipToggleChanged(flipToggle: boolean) : void {
        this.flipToggle = flipToggle;
    }

}
