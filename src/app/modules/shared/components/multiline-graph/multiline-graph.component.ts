import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	ViewEncapsulation,
} from "@angular/core";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import * as d3Scale from "d3-scale";
import * as d3 from "d3-selection";
import * as d3Shape from "d3-shape";

@Component({
	selector: "app-multiline-graph",
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./multiline-graph.component.html",
	styleUrls: ["./multiline-graph.component.scss"],
})
export class MultilineGraphComponent implements OnInit {
	title = "multi line chart";

	private margin = { top: 20, right: 20, bottom: 30, left: 50 };
	private width: number;
	private height: number;
	private x: any;
	private y: any;
	private svg: any;

	constructor(private cd: ChangeDetectorRef) {
		this.width = 900 - this.margin.left - this.margin.right;
		this.height = 500 - this.margin.top - this.margin.bottom;
	}

	ngOnInit() {}

	private initSvg() {
		this.svg = d3
			.select("#linechart")
			.append("g")
			.attr(
				"transform",
				"translate(" + this.margin.left + "," + this.margin.top + ")"
			);
	}
	private drawAxis() {
		this.svg
			.append("g")
			.attr("class", "axis axis--x")
			.attr("transform", "translate(0," + this.height + ")")
			.call(d3Axis.axisBottom(this.x));

		this.svg
			.append("g")
			.attr("class", "axis axis--y")
			.call(d3Axis.axisLeft(this.y))
			.append("text")
			.attr("class", "axis-title")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", ".71em")
			.style("text-anchor", "end")
			.text("Price ($)");
	}
}
