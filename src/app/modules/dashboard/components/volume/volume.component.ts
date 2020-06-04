import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-volume",
	templateUrl: "./volume.component.html",
	styleUrls: ["./volume.component.scss"],
})
export class VolumeComponent implements OnInit {
	private title = "Volume";
	private description =
		"Will contain the changes in volume for a certain stock";

	constructor() {}

	ngOnInit() {}
}
