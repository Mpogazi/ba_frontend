import { Component, Input } from '@angular/core';
import { Header } from '../../interfaces/header.interface';

@Component({
    selector: 'app-header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HomeHeaderComponent {
    private navbarOpen  = false;
    @Input() navList: Header[];

    public toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

    public trackByFn(item) {
        if (!item) {
            return null;
        }
        return item.name;
    }
}
