import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
    { path: 'home', loadChildren: '../modules/home/home.module#HomeModule' },
    { path: 'dashboard', loadChildren:'./dashboard/dashboard.module#DashboardModule'},
    { path: '', redirectTo:'/home', pathMatch: 'full'},
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
