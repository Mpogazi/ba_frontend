import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    public navList = [
        { link: '/dashboard', name: 'Dashboard' },
        { link: '/dashboard/watchlist', name: 'Watchlist'}
    ];

    constructor() {}
}
