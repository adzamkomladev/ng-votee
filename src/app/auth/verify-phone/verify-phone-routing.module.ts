import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyPhoneComponent } from './verify-phone.component';

const routes: Routes = [{ path: '', component: VerifyPhoneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyPhoneRoutingModule { }
