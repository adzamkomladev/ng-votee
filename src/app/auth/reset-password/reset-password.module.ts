import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TuiButtonModule } from '@taiga-ui/core';
import { TuiFieldErrorModule, TuiInputPasswordModule } from '@taiga-ui/kit';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';

import { ValidResetPasswordLinkGuard } from './guards/valid-reset-password-link.guard';

import { ResetPasswordComponent } from './reset-password.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';

@NgModule({
  declarations: [ResetPasswordComponent, ResetPasswordFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
    TuiFieldErrorModule,
    TuiButtonModule,
    ResetPasswordRoutingModule,
  ],
  providers: [ValidResetPasswordLinkGuard],
})
export class ResetPasswordModule {}
