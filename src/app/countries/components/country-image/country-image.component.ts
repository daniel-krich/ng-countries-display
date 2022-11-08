import { Component, Input, OnInit  } from '@angular/core';
import { CountriesDataService } from '../../services/countries-data.service';

@Component({
  selector: 'app-country-image',
  templateUrl: './country-image.component.html',
  styleUrls: ['./country-image.component.scss']
})
export class CountryImageComponent implements OnInit {

    @Input() public countryImageSrc: string | undefined;
    @Input() public countryName: string | undefined;
    @Input() public flagCode: string = '';
    @Input() public canFlip: boolean = true;
    @Input() public population: number = 0;

    constructor(private countriesService: CountriesDataService) { }

    ngOnInit(): void {
    }

    public onRemoveCountry(): void {
        this.countriesService.removeCountry(this.flagCode);
    }

}
