import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiButtonModule, TuiNotificationModule } from '@taiga-ui/core';

import { VerificationLinkSentRoutingModule } from './verification-link-sent-routing.module';

import { VerificationLinkSentComponent } from './verification-link-sent.component';

@NgModule({
  declarations: [VerificationLinkSentComponent],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiNotificationModule,
    VerificationLinkSentRoutingModule,
  ],
})
export class VerificationLinkSentModule {}
