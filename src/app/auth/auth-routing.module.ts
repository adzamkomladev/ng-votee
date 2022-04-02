import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'sign-in',
        loadChildren: () => import('./sign-in/sign-in.module').then((m) => m.SignInModule),
      },
      {
        path: 'sign-up',
        loadChildren: () => import('./sign-up/sign-up.module').then((m) => m.SignUpModule),
      },
      {
        path: 'create-account',
        loadChildren: () =>
          import('./create-account/create-account.module').then((m) => m.CreateAccountModule),
      },
      {
        path: 'verify-phone',
        loadChildren: () =>
          import('./verify-phone/verify-phone.module').then((m) => m.VerifyPhoneModule),
      },
      {
        path: 'verify-email',
        loadChildren: () =>
          import('./verify-email/verify-email.module').then((m) => m.VerifyEmailModule),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('./forgot-password/forgot-password.module').then((m) => m.ForgotPasswordModule),
      },
      {
        path: 'reset-password',
        loadChildren: () =>
          import('./reset-password/reset-password.module').then((m) => m.ResetPasswordModule),
      },
      {
        path: 'reset-link-sent',
        loadChildren: () =>
          import('./reset-link-sent/reset-link-sent.module').then((m) => m.ResetLinkSentModule),
      },
      {
        path: 'verification-link-sent',
        loadChildren: () =>
          import('./verification-link-sent/verification-link-sent.module').then(
            (m) => m.VerificationLinkSentModule
          ),
      },
      {
        path: 'voters/sign-in',
        loadChildren: () => import('./voters/sign-in/sign-in.module').then((m) => m.SignInModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
