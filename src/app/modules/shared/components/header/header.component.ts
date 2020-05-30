import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Header } from "../../interfaces/header.interface";

@Component({
	selector: "app-header-component",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HomeHeaderComponent {
	public navbarOpen = false;
	@Input() navList: Header[];
	@Input() home: boolean;
	@Input() dashboard: boolean;
	@Output() open: EventEmitter<any> = new EventEmitter();
	@Output() close: EventEmitter<any> = new EventEmitter();

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
