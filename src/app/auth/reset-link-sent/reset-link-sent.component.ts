import { Component, OnInit } from '@angular/core';

import { catchError, take, tap } from 'rxjs';

import { AuthService } from '../../@common/services/auth.service';
import { NotificationService } from '../../@common/services/notification.service';

@Component({
  template: `
    <div class="tui-container">
      <div class="tui-row tui-space_bottom-4">
        <div class="tui-island_text-align_center">
          <h3 class="tui-text_h3 tui-space_top-0 tui-space_bottom-2">Reset Password</h3>
        </div>
      </div>
      <div class="tui-row tui-space_bottom-4">
        <img
          class="tui-col_md-3"
          src="/assets/svg/password-reset-img.svg"
          alt="Reset link sent image"
        />
      </div>
      <div class="tui-row tui-space_bottom-4">
        <p class="tui-text_body-l-2 tui-island_text-align_center">
          Please click on the link that has been sent to
          <strong>adzamkomla@gmail.com</strong> to reset your password. This
          <br />
          link is valid for 24 hours.
        </p>
      </div>
      <div class="tui-row">
        <button
          [showLoader]="isResendProcessing"
          (click)="onResendEmail()"
          class="tui-col_md-5"
          size="l"
          tuiButton
        >
          Resend Email
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .tui-row {
        justify-content: center;
      }
    `,
  ],
})
export class ResetLinkSentComponent implements OnInit {
  isResendProcessing!: boolean;

  constructor(
    private readonly auth: AuthService,
    private readonly notification: NotificationService
  ) {
    this.isResendProcessing = false;
  }

  ngOnInit(): void {}

  onResendEmail() {
    this.isResendProcessing = true;

    this.auth
      .sendResetLink({ email: 'dkdkf' })
      .pipe(
        take(1),
        catchError((err) => {
          this.isResendProcessing = false;
          this.notification.notifyViaToast(err.message, 'ERROR');
          return err;
        }),
        tap(() => {
          this.isResendProcessing = false;
          this.notification.notifyViaToast(
            'Reset password link sent to your email. This link is valid for 24 hours.',
            'SUCCESS',
            null,
            null,
            { autoClose: true }
          );
        })
      )
      .subscribe();
  }
}
