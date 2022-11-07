import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-country-image',
  templateUrl: './country-image.component.html',
  styleUrls: ['./country-image.component.scss']
})
export class CountryImageComponent implements OnInit {

    @Input() public countryImageSrc: string | undefined;
    @Input() public countryName: string | undefined;

    constructor() { }

    ngOnInit(): void {
    }

}
