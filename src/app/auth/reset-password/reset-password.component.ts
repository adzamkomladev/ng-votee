import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { catchError, take, tap } from 'rxjs';

import { AuthService } from '../../@common/services/auth.service';
import { NotificationService } from '../../@common/services/notification.service';

@Component({
  template: `
    <div class="tui-container">
      <div class="tui-row">
        <div class="heading">
          <h3 class="tui-text_h3">Reset password</h3>
          <p>Verify your new password</p>
        </div>
      </div>
      <div class="tui-row">
        <votee-reset-password-form
          [resetPasswordToken]="resetPasswordToken"
          [isResetProcessing]="isResetProcessing"
          [resetForm]="resetForm"
          (submitForm)="onSubmitForm($event)"
          class="tui-col_md-6"
        ></votee-reset-password-form>
      </div>
    </div>
  `,
  styles: [
    `
      .tui-row {
        justify-content: center;
      }

      .heading {
        text-align: center;

        p {
          color: var(--tui-negative);
          font: var(--tui-font-text-l);
          font-weight: bold;
        }
      }
    `,
  ],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordToken!: string | null;
  isResetProcessing!: boolean;
  resetForm!: boolean;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly auth: AuthService,
    private readonly notification: NotificationService
  ) {
    this.isResetProcessing = this.resetForm = false;
  }

  ngOnInit() {
    this.resetPasswordToken = this.route.snapshot.queryParamMap.get('resetPasswordToken');
  }

  onSubmitForm(data: any) {
    this.isResetProcessing = true;
    this.resetForm = false;

    this.auth
      .resetPassword({ ...data, resetPasswordToken: this.resetPasswordToken })
      .pipe(
        take(1),
        catchError((err) => {
          this.isResetProcessing = false;
          this.notification.notifyViaToast(err.message, 'ERROR');
          return err;
        }),
        tap(() => {
          this.isResetProcessing = false;
          this.notification.notifyViaToast(
            'Password has been set successfully. You can now sign in with your new password.',
            'SUCCESS',
            null,
            ['/auth', 'sign-in']
          );

          this.resetForm = true;
        })
      )
      .subscribe();
  }
}
