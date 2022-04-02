import { Component } from '@angular/core';

import { catchError, take, tap } from 'rxjs';

import { AuthService } from '../../@common/services/auth.service';
import { NotificationService } from '../../@common/services/notification.service';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  isSignInProcessing!: boolean;
  resetForm!: boolean;

  constructor(
    private readonly auth: AuthService,
    private readonly notification: NotificationService
  ) {
    this.isSignInProcessing = this.resetForm = false;
  }

  onSubmitForm(data: any) {
    this.isSignInProcessing = true;
    this.resetForm = false;

    this.auth
      .signInViaEmail({ ...data })
      .pipe(
        take(1),
        catchError((err) => {
          this.isSignInProcessing = false;
          this.notification.notifyViaToast(err.message, 'ERROR');
          return err;
        }),
        tap(() => {
          this.isSignInProcessing = false;
          this.notification.notifyViaToast('Sign in complete.', 'SUCCESS', null, [
            '/auth',
            'verify-phone',
          ]);

          this.resetForm = true;
        })
      )
      .subscribe();
  }
}
