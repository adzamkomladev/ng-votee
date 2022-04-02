import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificationLinkSentComponent } from './verification-link-sent.component';

const routes: Routes = [{ path: '', component: VerificationLinkSentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificationLinkSentRoutingModule { }
