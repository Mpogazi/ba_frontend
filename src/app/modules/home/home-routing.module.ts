import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from '../shared/components/notfound/notfound.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { CareersComponent } from './components/careers/careers.component';
import { EducationComponent } from './components/education/education.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamComponent } from './components/team/team.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent,
    children: [
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent}
    ]},
    { path: 'home/home', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {
    static components = [HomeComponent];
}
