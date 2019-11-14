import { Component } from '@angular/core';

@Component({
    selector: 'app-home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    public navList = [
        { link: 'home', name: 'Home' },
        { link: '/about', name: 'About' },
        { link: '/education', name: 'Education' },
        { link: '/team', name: 'Team' },
        { link: '/blog', name: 'Blog' },
        { link: '/careers', name: 'Careers' }
    ];
}

