import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-owners",
	templateUrl: "./owners.component.html",
	styleUrls: ["./owners.component.scss"],
})
export class OwnersComponent implements OnInit {
	public title = "Owners";
	public description =
		"Will hold the owners of the specified security/option";

	constructor() {}

	ngOnInit() {}
}
