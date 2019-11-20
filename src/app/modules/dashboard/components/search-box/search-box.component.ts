import { Component } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
    model: any;
    icon = faCalendarAlt;
    constructor() {}
}
