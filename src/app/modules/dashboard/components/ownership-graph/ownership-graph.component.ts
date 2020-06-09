import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-ownership-graph",
	templateUrl: "./ownership-graph.component.html",
	styleUrls: ["./ownership-graph.component.scss"],
})
export class OwnershipGraphComponent implements OnInit {
	public title = "Stock Ownership";
	public description =
		"Will contain the time series representing the ownership of the stock";
	public size = { w: 1500, h: 300 };
	constructor() {}

	ngOnInit() {}
}
