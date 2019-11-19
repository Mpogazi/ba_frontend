import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';

const components = [
    DashboardComponent
];


@NgModule({
  declarations: [...components],
  bootstrap: [ DashboardComponent ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BrowserModule,
  ]
})
export class DashboardModule { }
