import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';

const components = [
	HomeComponent,
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