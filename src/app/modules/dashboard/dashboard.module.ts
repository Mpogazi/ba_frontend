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
import { OwnersComponent } from "./components/owners/owners.component";
import { OwnershipGraphComponent } from "./components/ownership-graph/ownership-graph.component";
import { SearchBoxComponent } from "./components/search-box/search-box.component";
import { UnknownComponent } from "./components/unknown/unknown.component";
import { VolumeComponent } from "./components/volume/volume.component";
import { DashboardComponent } from "./dashboard.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { CcassEffects } from "./effects/ccass.effects";
import { ccassFeatureKey, ccassReducer } from "./reducers/ccass.reducers";

const components = [
	DashboardComponent,
	SearchBoxComponent,
	VolumeComponent,
	OwnershipGraphComponent,
	OwnersComponent,
	UnknownComponent,
	SidenavComponent,
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
		StoreModule.forFeature(ccassFeatureKey, ccassReducer),
		EffectsModule.forFeature([CcassEffects]),
	],
})
export class DashboardModule {}
