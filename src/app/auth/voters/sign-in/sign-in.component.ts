import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { catchError, take, tap } from 'rxjs';

import { AuthService } from '../../../@common/services/auth.service';
import { NotificationService } from '../../../@common/services/notification.service';

@Component({
  template: `
    <div class="tui-container">
      <div class="tui-row">
        <div class="heading">
          <h3 class="tui-text_h3 tui-space_top-0">Sign In To Vote!</h3>
        </div>
      </div>
      <div class="tui-row">
        <votee-voter-sign-in-form
          [accessKey]="accessKey"
          [isSignInProcessing]="isSignInProcessing"
          [resetForm]="resetForm"
          (submitForm)="onSubmitForm($event)"
          class="tui-col_md-6"
        ></votee-voter-sign-in-form>
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
export class SignInComponent implements OnInit {
  accessKey!: string | null;
  isSignInProcessing!: boolean;
  resetForm!: boolean;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly auth: AuthService,
    private readonly notification: NotificationService
  ) {
    this.isSignInProcessing = this.resetForm = false;
  }

  ngOnInit() {
    this.accessKey = this.route.snapshot.queryParamMap.get('accessKey');
  }

  onSubmitForm(data: any) {
    this.isSignInProcessing = true;
    this.resetForm = false;

    this.auth
      .voterSignInViaAccessKey({ ...data })
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
