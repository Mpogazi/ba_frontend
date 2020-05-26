import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';
import { NotfoundComponent } from './modules/shared/components/notfound/notfound.component';


const routes: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'dashboard', loadChildren:'./dashboard/dashboard.module#DashboardModule'},
    { path: '', redirectTo:'/home', pathMatch: 'full'},
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
