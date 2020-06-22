import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
	selector: "app-home-wrapper",
	templateUrl: "./home-wrapper.component.html",
	styleUrls: ["./home-wrapper.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeWrapperComponent implements OnInit {
	public static = {
		yf_code: "0001.HK",
		ccass_code: "00001",
		short_name: "CKH HOLDINGS",
		long_name: "CK Hutchison Holdings Limited",
		beta: 1.059468,
		market_capitalization: 21342353425,
		entreprise_value: 143214234,
		shares_outstanding: 1412352134,
		shares_float: 12342134,
		adv10: 134223423,
		bid: 52.43,
		ask: 53.45,
	};

	constructor() {}

	ngOnInit() {
		this.watchlisted("None", ["None"]);
	}

	private watchlisted(stock: string, watchlist: string[]) {
		if (watchlist.indexOf(stock) === -1) {
			document.getElementById("watchlist").innerHTML = "+";
		} else {
			document.getElementById("watchlist").innerHTML = "&#10003;";
		}
	}
}
