import { Component } from '@angular/core';

import { catchError, take, tap } from 'rxjs';

import { AuthService } from '../../@common/services/auth.service';
import { NotificationService } from '../../@common/services/notification.service';

@Component({
  templateUrl: './verify-phone.component.html',
  styleUrls: ['./verify-phone.component.scss'],
})
export class VerifyPhoneComponent {
  isVerifyProcessing!: boolean;
  isResendProcessing!: boolean;
  resetForm!: boolean;

  phoneNumber = '0202442452';

  constructor(
    private readonly auth: AuthService,
    private readonly notification: NotificationService
  ) {
    this.isVerifyProcessing = this.isResendProcessing = this.resetForm = false;
  }

  onSubmitForm(data: any) {
    this.isVerifyProcessing = true;
    this.resetForm = false;

    this.auth
      .verifyPhoneNumber({ ...data })
      .pipe(
        take(1),
        catchError((err) => {
          this.isVerifyProcessing = false;
          this.notification.notifyViaToast(err.message, 'ERROR');
          return err;
        }),
        tap(() => {
          this.isVerifyProcessing = false;
          this.resetForm = true;
          this.notification.notifyViaToast('Phone number verification complete.', 'SUCCESS', null, [
            '/auth',
            'verification-link-sent',
          ]);
        })
      )
      .subscribe();
  }

  onResendCode() {
    this.isResendProcessing = true;

    this.auth
      .sendCodeToPhone({ phoneNumber: this.phoneNumber })
      .pipe(
        take(1),
        catchError((err) => {
          this.isResendProcessing = false;
          this.notification.notifyViaToast(err.message, 'ERROR');
          return err;
        }),
        tap(() => {
          this.isResendProcessing = false;
          this.notification.notifyViaToast('Verification code sent to your phone.', 'SUCCESS');
        })
      )
      .subscribe();
  }
}
