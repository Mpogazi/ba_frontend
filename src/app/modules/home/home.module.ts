import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeRoutingModule } from './home-routing.module';

import { BrowserModule } from '@angular/platform-browser';

// Components
import { HomeFooterComponent } from '../shared/components/footer/footer.component';
import { HomeHeaderComponent } from '../shared/components/header/header.component';
import { HomeAuthenticationComponent
} from './components/authentication/authentication.component';
import { HomeDescriptionComponent } from './components/description/description.component';
import { HomeComponent } from './home.component';

const components = [
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeAuthenticationComponent,
    HomeDescriptionComponent
];

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    declarations: [...components],
    bootstrap: [ HomeComponent ]
})

export class HomeModule {}
