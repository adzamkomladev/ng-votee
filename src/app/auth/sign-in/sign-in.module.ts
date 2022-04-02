import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {TuiButtonModule} from "@taiga-ui/core";
import {TuiCheckboxLabeledModule, TuiFieldErrorModule, TuiInputModule, TuiInputPasswordModule} from '@taiga-ui/kit';

import {SignInRoutingModule} from './sign-in-routing.module';

import {SignInComponent} from './sign-in.component';
import {SignInFormComponent} from './components/sign-in-form/sign-in-form.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignInFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiCheckboxLabeledModule,
    TuiFieldErrorModule,
    TuiButtonModule,
    SignInRoutingModule
  ]
})
export class SignInModule {
}
