import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
    styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
    public navList = [
        { link: '/home', name: 'Home' },
        { link: '/home/about', name: 'About' },
        { link: '/home/education', name: 'Education' },
        { link: '/home/team', name: 'Team' },
        { link: '/home/blog', name: 'Blog' },
        { link: '/home/careers', name: 'Careers' },
        { link: '/home/login', name: 'Login' },
        { link: '/home/signup', name: 'Signup' }
    ];
    constructor() { }

    ngOnInit() {

    }

}
