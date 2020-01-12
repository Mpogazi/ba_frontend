import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SignupComponent } from './modules/home/components/signup/signup.component';
import { HomeComponent } from './modules/home/home.component';
import { NotfoundComponent } from './modules/shared/components/notfound/notfound.component';
import { HomeAuthenticationComponent } from './modules/home/components/authentication/authentication.component';


const routes: Routes = [
    // For dvpt purposes. Please take it back to home.
    { path: '', redirectTo: 'testing', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'testing', component: HomeAuthenticationComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: '**', component: NotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
