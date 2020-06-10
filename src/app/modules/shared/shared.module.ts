import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { BrowserModule } from "@angular/platform-browser";

import { HomeFooterComponent } from "./components/footer/footer.component";
import { HomeHeaderComponent } from "./components/header/header.component";
import { LineChartComponent } from "./components/line-chart/line-chart.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { PriceCandlesComponent } from "./components/price-candles/price-candles.component";

import { SharedRoutingModule } from "./shared-routing.module";
import { SharedComponent } from "./shared.component";
import { MultilineGraphComponent } from "./components/multiline-graph/multiline-graph.component";
import { HistogramComponent } from "./components/histogram/histogram.component";

const components = [
	SharedComponent,
	HomeHeaderComponent,
	HomeFooterComponent,
	PriceCandlesComponent,
	LineChartComponent,
	NotfoundComponent,
	HistogramComponent,
	MultilineGraphComponent,
];

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		SharedRoutingModule,
	],
	declarations: [...components],
	bootstrap: [],
	exports: [...components],
})
export class SharedModule {}
