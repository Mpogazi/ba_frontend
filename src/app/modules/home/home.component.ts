import { Component } from '@angular/core';

@Component({
    selector: 'app-home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    public navList = [
        // { link: '/home/about', name: 'About' },
        // { link: '/home/education', name: 'Education' },
        // { link: '/home/team', name: 'Team' },
        // { link: '/home/blog', name: 'Blog' },
        // { link: '/home/careers', name: 'Careers' },
        { link: '/home/login', name: 'Login' },
        { link: '/home/signup', name: 'Signup' }
    ];
}
