import { Component, OnInit } from '@angular/core';

import { catchError, take, tap } from 'rxjs';

import { AuthService } from '../../@common/services/auth.service';
import { NotificationService } from '../../@common/services/notification.service';

@Component({
  template: `
    <div class="tui-container">
      <div class="tui-row tui-space_bottom-4">
        <div class="tui-island_text-align_center">
          <h3 class="tui-text_h3 tui-space_top-0 tui-space_bottom-2">Verify your Email</h3>
          <p class="tui-text_body-l-2">Thank you for registering</p>
        </div>
      </div>
      <div class="tui-row tui-space_bottom-4">
        <img class="tui-col_md-2" src="/assets/svg/verify-email-img.svg" alt="Verify email image" />
      </div>
      <div class="tui-row tui-space_bottom-4">
        <p class="tui-text_body-l-2 tui-island_text-align_center">
          Please click on the link that has been sent to
          <strong>adzamkomla@gmail.com</strong> to verify your account and
          <br />
          continue the registration process.
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
export class VerificationLinkSentComponent implements OnInit {
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
      .sendVerificationEmail({ email: 'dkdkf' })
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
            'Verification link sent to your email. This link is valid for 24 hours.',
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
