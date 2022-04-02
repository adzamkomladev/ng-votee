import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiButtonModule, TuiNotificationModule } from '@taiga-ui/core';

import { ResetLinkSentRoutingModule } from './reset-link-sent-routing.module';

import { ResetLinkSentComponent } from './reset-link-sent.component';

@NgModule({
  declarations: [ResetLinkSentComponent],
  imports: [CommonModule, TuiButtonModule, TuiNotificationModule, ResetLinkSentRoutingModule],
})
export class ResetLinkSentModule {}
