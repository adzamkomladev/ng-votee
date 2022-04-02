import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetLinkSentComponent } from './reset-link-sent.component';

const routes: Routes = [{ path: '', component: ResetLinkSentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetLinkSentRoutingModule { }
