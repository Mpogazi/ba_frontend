import { Component } from '@angular/core';

@Component({
    selector: 'app-home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    public navList = [
        { link: 'signup', name: 'Signup' },
        { link: 'login', name: 'Login' }
    ];
}
