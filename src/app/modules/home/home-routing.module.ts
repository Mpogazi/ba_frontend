import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { CareersComponent } from './components/careers/careers.component';
import { EducationComponent } from './components/education/education.component';
import { TeamComponent } from './components/team/team.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent,
    children: [
        { path: 'about', component: AboutComponent },
        { path: 'education', component: EducationComponent },
        { path: 'team', component: TeamComponent },
        { path: 'blog', component: BlogComponent },
        { path: 'careers', component: CareersComponent },
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
