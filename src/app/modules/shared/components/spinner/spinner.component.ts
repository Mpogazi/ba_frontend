import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})

export class SpinnerComponent implements OnInit {
    @Input() message: string;
    @Input() showSpinner: boolean;
    @Input() fullScreen: boolean;

    constructor() { }

    ngOnInit() {}

}
