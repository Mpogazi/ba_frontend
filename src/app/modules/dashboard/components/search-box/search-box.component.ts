import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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
    public searchForm: FormGroup;
    public submitted = false;

    constructor(
        private formBuilder: FormBuilder
    ) {}
    
    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            stockCode: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required]
        });
    }

    // A convenience getter for form controls
    get f() { return this.searchForm.controls; }

    onSubmit() {
        console.log("submitted");
        this.submitted = true;
        if (this.searchForm.invalid) {
            return;
        }
        this.onReset();
    }

    onReset() {
        this.submitted = false;
        this.searchForm.reset({});
    }
}
