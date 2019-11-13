import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';

const components = [];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    declarations: [...components],
    bootstrap: []
})

export class HomeModule { }
