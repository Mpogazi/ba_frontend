import { Component, OnInit, OnDestroy } from "@angular/core";
import { WindowService } from "@shared_services/window.service";
import { Observable, Subscription, fromEvent } from "rxjs";
import { Store, select } from "@ngrx/store";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit, OnDestroy {
	private resizeObservable$: Observable<Event>;
	private subscription$: Subscription;
	private compact = true;

	constructor(private wd: WindowService, private store: Store) {}

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
			this.rmClass("sidenav", "compacted");
		} else {
			this.addClass("sidenav", "compacted");
		}
		this.compact = !this.compact;
	}

	private addClass(id: string, cls: string) {
		this.wd.window.document.getElementById(id).classList.add(cls);
	}

	private rmClass(id: string, cls: string) {
		this.wd.window.document.getElementById(id).classList.remove(cls);
	}

	private enlargeMain() {
		// Getting the main to cover the entire screen
		let offset = document.getElementById("sidenav").clientWidth;
		let width = this.wd.window.innerWidth;
		let elem = this.wd.window.document.getElementById("main");
		elem.style.left = `${offset}`;
		elem.style.width = `${width - offset - 15}px`;
	}
}
