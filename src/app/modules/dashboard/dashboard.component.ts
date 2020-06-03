import { Component, OnInit, OnDestroy } from "@angular/core";
import { WindowService } from "@shared_services/window.service";
import { Observable, Subscription, fromEvent } from "rxjs";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit, OnDestroy {
	public navList = [
		{ link: "/dashboard", name: "Dashboard" },
		{ link: "/home", name: "home" },
	];
	private resizeObservable$: Observable<Event>;
	private subscription$: Subscription;
	private compact = true;

	constructor(private wd: WindowService) {}

	ngOnInit() {
		this.enlargeMain();
		this.resizeObservable$ = fromEvent(window, "resize");
		this.subscription$ = this.resizeObservable$.subscribe((_) => {
			this.enlargeMain();
		});
	}

	ngOnDestroy() {
		this.subscription$.unsubscribe();
	}

	public handleToggle(e: any) {
		this.toggle();
		this.enlargeMain();
	}

	private toggle() {
		if (this.compact) {
			document.getElementById("sidenav").classList.remove("compacted");
		} else {
			document.getElementById("sidenav").classList.add("compacted");
		}
		this.compact = !this.compact;
	}

	private enlargeMain() {
		// Getting the main to cover the entire screen
		let offset = document.getElementById("sidenav").clientWidth;
		let width = this.wd.window.innerWidth;
		let elem = this.wd.window.document.getElementById("main");
		elem.style.left = `${offset}`;
		elem.style.width = `${width - offset}px`;
	}
}
