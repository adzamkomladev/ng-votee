import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { catchError, take, tap } from 'rxjs';

import { AuthService } from '../../@common/services/auth.service';
import { NotificationService } from '../../@common/services/notification.service';

@Component({
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  resetForm!: boolean;
  isResetProcessing!: boolean;
  showLinkInvalidNotification!: boolean;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly auth: AuthService,
    private readonly notification: NotificationService
  ) {
    this.resetForm = this.isResetProcessing = this.showLinkInvalidNotification = false;
  }

  ngOnInit() {
    this.showLinkInvalidNotification =
      this.route.snapshot.queryParamMap.get('linkInvalid') === 'true';
  }

  onSubmitForm(data: any) {
    this.isResetProcessing = true;
    this.resetForm = false;

    this.auth
      .sendResetLink(data)
      .pipe(
        take(1),
        catchError((err) => {
          this.isResetProcessing = false;
          this.notification.notifyViaToast(err.message, 'ERROR');
          return err;
        }),
        tap(() => {
          this.isResetProcessing = false;
          this.resetForm = true;
        })
      )
      .subscribe(() => this.router.navigate(['/auth', 'reset-link-sent']));
  }

  onCloseNotification() {
    // Close the notification
    this.showLinkInvalidNotification = false;

    // Remove query params from the URL
    return this.router.navigate([], {
      queryParams: {
        linkInvalid: null,
      },
      queryParamsHandling: 'merge',
    });
  }
}
