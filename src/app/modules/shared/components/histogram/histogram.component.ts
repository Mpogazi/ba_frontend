import {
	Component,
	OnInit,
	OnDestroy,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	ViewEncapsulation,
} from "@angular/core";

import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import * as d3Scale from "d3-scale";
import * as d3 from 'd3';
import { COTY } from '../../mocks/coty.mock';

@Component({
	selector: "app-histogram-component",
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./histogram.component.html",
	styleUrls: ["./histogram.component.scss"],
})
export class HistogramComponent implements OnInit, OnDestroy {
	public title = "Histogram";

	private margin = { top: 20, right: 20, bottom: 30, left: 40 };
	private width: number;
	private height: number;
	private x: any;
	private y: any;
	private svg: any;
	private histogram: any;

	constructor(private cd: ChangeDetectorRef) {
		this.width = 900 - this.margin.left - this.margin.right;
		this.height = 500 - this.margin.top - this.margin.bottom;
	}
	ngOnInit() {
		this.initSvg();
		this.initAxis();
		this.drawAxis();
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

	private initAxis() {
		this.x = d3Scale.scaleTime().range([0, this.width]);
		this.y = d3Scale.scaleLinear().range([this.height, 0]);
		this.x.domain(d3Array.extent(COTY, (d) => d.date));
		this.y.domain(d3Array.extent(COTY, (d) => d.volume / 1000000));
	}

	private drawAxis() {
		this.svg
			.append("g")
			.attr("transform", "translate(0," + this.height + ")")
			.attr("y", -4)
			.attr("y", this.width - this.margin.right)
			.call(d3Axis.axisBottom(this.x).ticks(this.width / 80));

		this.svg
			.append("g")
			.call(d3Axis.axisLeft(this.y).ticks(this.height / 80))
			.select(".domain").remove()
			.append("text")
			.attr("transform", "rotate(-90)")
			.attr("x", 4)
			.attr("text-anchor", "start")
			.attr("font-weight", "bold")
			.attr("dy", ".61em");
	}

	private drawHistogram() {
		this.histogram = d3.histogram().value(COTY => COTY);
		// const g = this.svg.append("g")
		// 		.attr("fill", "steelblue")
		// 		.selectAll("g")
		// 		.data(COTY)
		// 		.join("g")
		// 			.attr("x", d => (d.volume) + 1)
		// 			.attr("width", d => Math.max(0, this.x(d.date) - this.x(d.date) - 1))
		// 			.attr("y", d => this.y(d.volume));
	}

	ngOnDestroy() {}
}
