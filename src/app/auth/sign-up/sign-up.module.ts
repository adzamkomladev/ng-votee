import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TuiButtonModule } from '@taiga-ui/core';
import {
  TuiCheckboxLabeledModule,
  TuiFieldErrorModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiInputPhoneInternationalModule,
} from '@taiga-ui/kit';

import { SignUpRoutingModule } from './sign-up-routing.module';

import { SignUpComponent } from './sign-up.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [SignUpComponent, SignUpFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiInputPhoneInternationalModule,
    TuiCheckboxLabeledModule,
    TuiFieldErrorModule,
    TuiButtonModule,
    SignUpRoutingModule,
  ],
})
export class SignUpModule {}
