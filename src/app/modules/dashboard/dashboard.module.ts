import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { SharedModule } from "../shared/shared.module";
import { SearchBoxComponent } from "./components/search-box/search-box.component";
import { UnknownComponent } from "./components/unknown/unknown.component";
import { VolumeComponent } from "./components/volume/volume.component";
import { DashboardComponent } from "./dashboard.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { CcassEffects } from "./effects/ccass.effects";
import * as ccassReducer from "./reducers/ccass.reducers";
import { HomeWrapperComponent } from "./components/home-wrapper/home-wrapper.component";
import { PriceComponent } from "./components/price/price.component";
import { CcassSharesComponent } from "./components/ccass-shares/ccass-shares.component";

const components = [
	DashboardComponent,
	HomeWrapperComponent,
	SearchBoxComponent,
	VolumeComponent,
	UnknownComponent,
	SidenavComponent,
	PriceComponent,
	CcassSharesComponent,
];

@NgModule({
	declarations: [...components],
	bootstrap: [DashboardComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		FontAwesomeModule,
		NgbModule,
		DashboardRoutingModule,
		SharedModule,
		BrowserModule,
		StoreModule.forFeature(
			ccassReducer.ccassFeatureKey,
			ccassReducer.reducer
		),
		EffectsModule.forFeature([CcassEffects]),
	],
})
export class DashboardModule {}
