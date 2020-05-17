import { Component } from '@angular/core';

@Component({
    selector: 'app-home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    public navList = [
        { link: '/home/signup', name: 'Signup' },
        { link: '/home/login', name: 'Login' }
    ];
}
