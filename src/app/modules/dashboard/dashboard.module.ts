import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
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
    SharedModule,
    BrowserModule,
  ]
})
export class DashboardModule { }
