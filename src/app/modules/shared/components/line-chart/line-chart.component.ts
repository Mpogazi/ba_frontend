import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
	Input,
	ViewEncapsulation,
} from '@angular/core';

import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Scale from 'd3-scale';
import * as d3 from 'd3-selection';
import * as d3Shape from 'd3-shape';

import { STOCKS } from '../../mocks/stocks.mock';

@Component({
	selector: 'app-linechart-component',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './line-chart.component.html',
	styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
	public title = 'Line Chart';

	private margin = { top: 20, right: 20, bottom: 30, left: 50 };
	@Input() w: number;
	@Input() h: number;
	private x: any;
	private y: any;
	private svg: any;
	private line: d3Shape.Line<[number, number]>;
	private realWidth: number;
	private realHeight: number;

	constructor(private cd: ChangeDetectorRef) {}

	ngOnInit() {
		console.log('width: ', this.w);
		console.log('height: ', this.h);
		this.realWidth = this.w - this.margin.left - this.margin.right;
		this.realHeight = this.h - this.margin.top - this.margin.bottom;
		this.initSvg();
		this.initAxis();
		this.drawAxis();
		this.drawLine();
		// this.cd.detectChanges();
	}

	private initSvg() {
		this.svg = d3
			.select('#linechart')
			.append('g')
			.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
	}

	private initAxis() {
		this.x = d3Scale.scaleTime().range([0, this.realWidth]);
		this.y = d3Scale.scaleLinear().range([this.realHeight, 0]);
		this.x.domain(d3Array.extent(STOCKS, (d) => d.date));
		this.y.domain(d3Array.extent(STOCKS, (d) => d.value));
	}

	private drawAxis() {
		this.svg
			.append('g')
			.attr('class', 'axis axis--x')
			.attr('transform', 'translate(0,' + this.realHeight + ')')
			.call(d3Axis.axisBottom(this.x));

		this.svg
			.append('g')
			.attr('class', 'axis axis--y')
			.call(d3Axis.axisLeft(this.y))
			.append('text')
			.attr('class', 'axis-title')
			.attr('transform', 'rotate(-90)')
			.attr('y', 6)
			.attr('dy', '.71em')
			.style('text-anchor', 'end')
			.text('Price ($)');
	}

	private drawLine() {
		this.line = d3Shape
			.line()
			.x((d: any) => this.x(d.date))
			.y((d: any) => this.y(d.value));

		this.svg.append('path').datum(STOCKS).attr('class', 'line').attr('d', this.line);
	}
}
