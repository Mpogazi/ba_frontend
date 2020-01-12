import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    constructor(
        private spinner: NgxSpinnerService) { }
    
    ngOnInit() { 
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
        }, 1000);

    }
}
