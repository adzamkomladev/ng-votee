import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TuiButtonModule} from "@taiga-ui/core";

import {LandingRoutingModule} from './landing-routing.module';

import {LandingComponent} from './landing.component';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    TuiButtonModule,
    LandingRoutingModule
  ]
})
export class LandingModule {
}
