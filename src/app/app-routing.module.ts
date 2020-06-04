import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./modules/home/home.component";
import { AuthGuard } from "@auth/auth.guard";

const routes: Routes = [
	{
		path: "home",
		loadChildren: () =>
			import("./modules/home/home.module").then((n) => n.HomeModule),
	},
	{
		path: "dashboard",
		loadChildren: () =>
			import("./modules/dashboard/dashboard.module").then(
				(n) => n.DashboardModule
			),
		/* canActivate: [AuthGuard]*/
	},
	{
		path: "",
		redirectTo: "/dashboard",
		pathMatch: "full",
	},
	{
		path: "**",
		component: HomeComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
