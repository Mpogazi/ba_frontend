import { Component } from '@angular/core';

@Component({
    selector: 'app-header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HomeHeaderComponent {
    public title = 'BOWEN ANALYTICS';
    private navbarOpen  = false;

    public toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }


}
