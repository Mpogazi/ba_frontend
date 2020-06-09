import {
	Component,
	OnInit,
	OnDestroy,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	ViewEncapsulation,
	Input,
} from "@angular/core";
import * as d3Axis from "d3-axis";
import * as d3Scale from "d3-scale";
import * as d3 from "d3";
import { COTY } from "../../mocks/coty.mock";

@Component({
	selector: "app-histogram-component",
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./histogram.component.html",
	styleUrls: ["./histogram.component.scss"],
})
export class HistogramComponent implements OnInit, OnDestroy {
	public title = "Volume histogram";
	private margin = { top: 20, right: 20, bottom: 30, left: 40 };
	private width: number;
	private height: number;
	private x: any;
	private y: any;
	private svg: any;
	@Input() size: any;

	constructor(private cd: ChangeDetectorRef) {}
	ngOnInit() {
		this.width = this.size.w - this.margin.left - this.margin.right;
		this.height = this.size.h - this.margin.top - this.margin.bottom;
		this.initSvg();
		this.initHistogram(COTY);
	}

	private initSvg() {
		this.svg = d3
			.select("#histogram")
			.append("g")
			.attr(
				"transform",
				"translate(" + this.margin.left + "," + this.margin.top + ")"
			);
	}

	private initHistogram(data: ArrayLike<any>) {
		const first_day = data[0].date;
		const last_day = data[data.length - 1].date;
		const minVol = d3.min(data, (d) => d.volume);
		const maxVol = d3.max(data, (d) => d.volume);

		this.y = d3Scale
			.scaleLinear()
			.domain([minVol, maxVol])
			.range([this.height, 0]);

		this.x = d3Scale
			.scaleTime()
			.domain([first_day, last_day])
			.range([0, this.width]);

		this.svg
			.append("g")
			.attr("transform", `translate(0, ${this.height})`)
			.call(d3Axis.axisBottom(this.x));

		this.svg
			.append("g")
			.call(
				d3.axisLeft(this.y).tickFormat((d: number) => {
					return `${d / 1000000}M`;
				})
			)
			.select(".domain")
			.remove();

		// The bars
		this.svg
			.selectAll()
			.data(data)
			.enter()
			.append("rect")
			.attr("x", (d: any) => this.x(d.date))
			.attr("y", (d: any) => this.y(d.volume))
			.attr("fill", (d: { close: number }, i: number) => {
				if (i === 0) {
					return "#03a678";
				} else {
					return data[i - 1].close > d.close ? "#c0392b" : "#03a678";
				}
			})
			.attr("width", 1)
			.attr("height", (d: { volume: any }) => {
				return this.height - this.y(d.volume);
			});
	}

	ngOnDestroy() {}
}
