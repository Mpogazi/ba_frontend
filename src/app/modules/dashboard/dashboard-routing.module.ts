import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '@auth/auth.guard';

const routes: Routes = [
    {
        path: 'dashboard', 
        component: DashboardComponent,
        children: [],
        canActivate:[AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule {
    static components = [DashboardComponent];
}
