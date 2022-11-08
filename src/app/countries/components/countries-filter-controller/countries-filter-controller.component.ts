import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countries-filter-controller',
  templateUrl: './countries-filter-controller.component.html',
  styleUrls: ['./countries-filter-controller.component.scss']
})
export class CountriesFilterControllerComponent implements OnInit {

    public searchInput: string | undefined;

    @Output() public searchInputEvent: EventEmitter<string> = new EventEmitter<string>();
    @Output() public flipInputEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit(): void { }

    public onSearchInput(): void {
        this.searchInputEvent.emit(this.searchInput);
    }

    public onFlipChanged(event: any) {
        this.flipInputEvent.emit(event.target.checked);
    }

}
