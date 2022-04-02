import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {TuiButtonModule, TuiLoaderModule, TuiNotificationModule} from '@taiga-ui/core';
import { TuiFieldErrorModule, TuiInputModule } from '@taiga-ui/kit';

import { VerifyPhoneRoutingModule } from './verify-phone-routing.module';

import { VerifyPhoneComponent } from './verify-phone.component';
import { VerifyPhoneFormComponent } from './components/verify-phone-form/verify-phone-form.component';

@NgModule({
  declarations: [VerifyPhoneComponent, VerifyPhoneFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiFieldErrorModule,
    TuiButtonModule,
    TuiNotificationModule,
    TuiLoaderModule,
    VerifyPhoneRoutingModule,
  ],
})
export class VerifyPhoneModule {}
