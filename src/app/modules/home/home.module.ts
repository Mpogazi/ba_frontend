import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticlesModule } from 'angular-particle';
import { HomeRoutingModule } from './home-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

// Components
import { AboutComponent } from './components/about/about.component';
import { HomeAuthenticationComponent
} from './components/authentication/authentication.component';
import { BlogComponent } from './components/blog/blog.component';
import { CareersComponent } from './components/careers/careers.component';
import { HomeDescriptionComponent } from './components/description/description.component';
import { EducationComponent } from './components/education/education.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamComponent } from './components/team/team.component';
import { HomeComponent } from './home.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const components = [
    HomeComponent,
    HomeAuthenticationComponent,
    HomeDescriptionComponent,
    AboutComponent,
    EducationComponent,
    TeamComponent,
    BlogComponent,
    CareersComponent,
    LoginComponent,
    SignupComponent
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        ParticlesModule,
        NgxSpinnerModule
    ],
    declarations: [...components],
    bootstrap: [HomeComponent]
})

export class HomeModule {}
