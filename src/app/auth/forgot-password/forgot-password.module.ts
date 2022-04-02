import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TuiButtonModule, TuiNotificationModule } from '@taiga-ui/core';
import { TuiFieldErrorModule, TuiInputModule } from '@taiga-ui/kit';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';

@NgModule({
  declarations: [ForgotPasswordComponent, ForgotPasswordFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiFieldErrorModule,
    TuiButtonModule,
    TuiNotificationModule,
    ForgotPasswordRoutingModule,
  ],
})
export class ForgotPasswordModule {}
