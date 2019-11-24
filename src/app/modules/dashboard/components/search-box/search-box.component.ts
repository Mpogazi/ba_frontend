import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';


@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
    public icon  = faCalendarAlt;
    private today = new Date();
    public model1: NgbDate;
    public model2: NgbDate;
    public dates = { endDate:
                        { year: this.today.getFullYear(),
                          month: this.today.getMonth() + 1,
                          day: this.today.getDate()
                        },
                     startDate:
                        { year: 2017,
                          month: 7,
                          day: 2
                        }
                    };

    constructor() {}
    ngOnInit() {}
}
