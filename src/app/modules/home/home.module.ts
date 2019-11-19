import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { TeamComponent } from './components/team/team.component';
import { HomeComponent } from './home.component';

const components = [
    HomeComponent,
    HomeAuthenticationComponent,
    HomeDescriptionComponent,
    AboutComponent,
    EducationComponent,
    TeamComponent,
    BlogComponent,
    CareersComponent
];

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        BrowserModule,
        SharedModule,
        BrowserAnimationsModule
    ],
    declarations: [...components],
    bootstrap: [HomeComponent]
})

export class HomeModule {}
