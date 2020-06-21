import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { HomeWrapperComponent } from "./components/home-wrapper/home-wrapper.component";
import { AuthGuard } from "@auth/auth.guard";

const routes: Routes = [
	{
		path: "",
		component: DashboardComponent,
		canActivate: [],
		children: [{ path: "", component: HomeWrapperComponent }],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardRoutingModule {}
