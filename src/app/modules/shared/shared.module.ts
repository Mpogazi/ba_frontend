import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { HomeFooterComponent } from './components/footer/footer.component';
import { HomeHeaderComponent } from './components/header/header.component';
import { SharedRoutingModule } from './shared-routing.module';

const components = [
    HomeHeaderComponent,
    HomeFooterComponent,
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        SharedRoutingModule
    ],
    declarations: [...components],
    bootstrap: [],
    exports: [...components]
})

export class SharedModule { }
