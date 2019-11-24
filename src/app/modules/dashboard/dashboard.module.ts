import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { UnknownComponent } from './components/unknown/unknown.component';
import { DashboardComponent } from './dashboard.component';

const components = [
    DashboardComponent
];


@NgModule({
  declarations: [...components, UnknownComponent, SearchBoxComponent],
  bootstrap: [ DashboardComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    DashboardRoutingModule,
    SharedModule,
    BrowserModule,
  ]
})
export class DashboardModule { }
