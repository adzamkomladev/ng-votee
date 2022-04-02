import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { catchError, take, tap } from 'rxjs';

import { AuthService } from '../../@common/services/auth.service';
import { NotificationService } from '../../@common/services/notification.service';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  isSignUpProcessing!: boolean;
  resetForm!: boolean;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly auth: AuthService,
    private readonly notification: NotificationService
  ) {
    this.isSignUpProcessing = this.resetForm = false;
  }

  onSubmitForm(data: any) {
    this.isSignUpProcessing = true;
    this.resetForm = false;

    this.auth
      .signUpViaEmail({ ...data })
      .pipe(
        take(1),
        catchError((err) => {
          this.isSignUpProcessing = false;
          this.notification.notifyViaToast(err.message, 'ERROR');
          return err;
        }),
        tap(() => {
          this.isSignUpProcessing = false;
          this.notification.notifyViaToast(
            'Your sign up has been successful. Welcome to Votee',
            'SUCCESS',
            null,
            ['/auth', 'verify-phone']
          );

          this.resetForm = true;
        })
      )
      .subscribe();
  }
}
