import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
	selector: "app-home-wrapper",
	templateUrl: "./home-wrapper.component.html",
	styleUrls: ["./home-wrapper.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeWrapperComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
