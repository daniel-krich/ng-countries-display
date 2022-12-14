import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../interfaces/country.interface';

@Pipe({
  name: 'countriesSearchFilter'
})
export class CountriesSearchFilterPipe implements PipeTransform {

    transform(countries: Array<Country>, filterSearch: string): Array<Country> {
        return countries.filter(x => x.name.common.toLowerCase().includes(filterSearch.toLowerCase()));
    }

}
