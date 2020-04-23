import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Scale from 'd3-scale';
import * as d3 from 'd3-selection';
import * as d3Chromatic from 'd3-scale-chromatic';
import * as d3format from 'd3-format';
import { timeFormat } from 'd3-time-format';

import { CANDLES, Candle } from '../../mocks/candle-stocks.mock';

@Component({
    selector: 'app-price-candles-component',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './price-candles.component.html',
    styleUrls: ['./price-candles.component.scss']
})
export class PriceCandlesComponent implements OnInit {

    title = 'Candles';

    private margin = { top: 20, right: 20, bottom: 30, left: 50 };
    private width: number;
    private height: number;
    private x: any;
    private y: any;
    private svg: any;
    private data: Candle[];

    constructor(private cd: ChangeDetectorRef) {
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        this.data = CANDLES;
    }

    ngOnInit() {
        this.initSvg();
        this.initAxis();
        this.drawAxis();
        this.drawLine();
        // this.cd.detectChanges();
    }

    private initSvg() {
        this.svg = d3.select('#candles')
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    }

    private initAxis() {
        let first_day = this.data[0].date
        let last_day  = this.data[this.data.length - 1].date
        this.x = d3Scale.scaleTime()
                    .domain([first_day, last_day])
                    .range([0, this.width]);
        this.y = d3Scale.scaleLinear()
                    .range([this.height, 0])
                    .domain(
                        [
                            d3Array.min(this.data, (d) => d.low), 
                            d3Array.max(this.data, (d) => d.high)
                        ]
                    );
    }

    private drawAxis() {

        this.svg.append('g')
            .attr('transform', `translate(0, ${ this.height})`)
            .call(d3Axis.axisBottom(this.x));

        this.svg.append('g')
            .attr('class', 'axis axis--y')
            .call(d3Axis.axisLeft(this.y))
            .append('text')
            .attr('class', 'axis-title')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '.65em')
            .style('text-anchor', 'end')
            .text('($)');
    }

    private drawLine() {
        const g = this.svg.append('g')
            .attr('stroke', 'black')
            .selectAll('g')
            .data(this.data)
            .join('g')
                .attr('transform', (d: any) => `translate(${this.x(d.date)},0)`);
        g.append('line')
            .attr('y1', (d: any) => this.y(d.low))
            .attr('y2', (d: any) => this.y(d.high));
        
        g.append('line')
            .attr('y1', (d: any) => this.y(d.open))
            .attr('y2', (d: any) => this.y(d.close))
            .attr('stroke-width', '5')
            .attr('stroke', (d: any) => d.open > d.close ? d3Chromatic.interpolateRdYlGn(0.8) 
                    : d.close > d.open ? d3Chromatic.interpolateRdYlGn(0.1) 
                    : d3Chromatic.interpolateRdYlGn(0.4));
        g.append("title")
                .text((d: any) => `${this.formatDate(d.date)}
                    Open: ${this.formatValue(d.open)}
                    Close: ${this.formatValue(d.close)} (${this.formatChange(d.open, d.close)})
                    Low: ${this.formatValue(d.low)}
                    High: ${this.formatValue(d.high)}`);
    }

    private formatDate(date: any) {
        return timeFormat('%B %-d, %Y')(date);
    }

    private formatValue(val: number) {
        return d3format.format(".2f")(val);
    }

    private formatChange(val1: number, val2: number) {
        const f = d3format.format(".2f");
        return f((val2 - val1) / val1);
    }

}
