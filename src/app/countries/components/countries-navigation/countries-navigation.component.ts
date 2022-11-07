import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countries-navigation',
  templateUrl: './countries-navigation.component.html',
  styleUrls: ['./countries-navigation.component.scss']
})
export class CountriesNavigationComponent implements OnInit {

    @Output() public navigationNextEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit(): void {
    }

    public onButtonNext() : void {
        this.navigationNextEvent.emit(true);
    }

    public onButtonPrev() : void {
        this.navigationNextEvent.emit(false);
    }

}
