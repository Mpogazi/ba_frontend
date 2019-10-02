import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';

// Components
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './components/header/header.component';

const components = [
    HomeComponent,
    HomeHeaderComponent,
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
