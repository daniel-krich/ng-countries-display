import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesDataService {

    private _countries: Array<Country> = new Array<Country>();

    constructor(private httpService: HttpClient) {
        this.httpService.get('https://restcountries.com/v3.1/all').subscribe(x => this._countries = x as Array<Country>);
    }

    public get countries() : Array<Country> {
        return [...this._countries];
    }
}