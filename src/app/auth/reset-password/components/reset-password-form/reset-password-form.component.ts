import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { passwordConfirmedValidator } from '../../directives/password-confirmed.directive';

import { NotificationService } from '../../../../@common/services/notification.service';

@Component({
  selector: 'votee-reset-password-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="tui-container_fullwidth">
      <div class="tui-row tui-row_sme">
        <div class="tui-col_12">
          <h3 class="tui-form__header tui-form__header_margin-top_none">
            <a [routerLink]="['/auth', 'sign-in']">Back to Sign in</a>
          </h3>
          <div class="tui-form__row">
            <tui-input-password class="tui-space_top-2" formControlName="password">
              Password
              <span class="tui-required"></span>
            </tui-input-password>

            <tui-field-error formControlName="password"></tui-field-error>
          </div>
          <div class="tui-form__row">
            <tui-input-password class="tui-space_top-2" formControlName="confirmPassword">
              Confirm password
              <span class="tui-required"></span>
            </tui-input-password>

            <tui-field-error formControlName="confirmPassword"></tui-field-error>
          </div>
          <div class="tui-form__buttons">
            <button
              [disabled]="!passesFirstPartValidations"
              [showLoader]="isResetProcessing"
              class="tui-form__button"
              size="l"
              tuiButton
              type="submit"
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </form>
  `,
  styles: [
    `
      .tui-form__button {
        width: 100%;
      }

      a {
        text-decoration: none;
        font: var(--tui-font-text-m);
        color: var(--tui-text-01);
        font-weight: bold;
      }
    `,
  ],
})
export class ResetPasswordFormComponent implements OnInit, OnChanges {
  @Input() resetPasswordToken!: string | null;
  @Input() isResetProcessing!: boolean;
  @Input() resetForm!: boolean;

  @Output() submitForm = new EventEmitter<any>();

  form!: FormGroup;

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  get passesFirstPartValidations() {
    return this.password?.valid && this.confirmPassword?.valid;
  }

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
      },
      {
        validators: passwordConfirmedValidator,
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetForm']?.currentValue) {
      this.form.reset();
    }
  }

  onSubmit() {
    if (this.form.invalid && this.form.getError('passwordConfirmed')) {
      this.notification.notifyViaToast('Password and Confirm password do not match.', 'ERROR');
      return;
    }

    this.submitForm.emit(this.form.value);
  }
}
