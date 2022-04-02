import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ValidResetPasswordLinkGuard } from './guards/valid-reset-password-link.guard';

import { ResetPasswordComponent } from './reset-password.component';

const routes: Routes = [
  { path: '', component: ResetPasswordComponent, canActivate: [ValidResetPasswordLinkGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswordRoutingModule {}
