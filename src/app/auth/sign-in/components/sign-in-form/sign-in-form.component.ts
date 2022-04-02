import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'votee-sign-in-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="tui-container_fullwidth">
      <div class="tui-row tui-row_sme">
        <div class="tui-col_12">
          <h3 class="tui-form__header tui-form__header_margin-top_none">Sign In</h3>
          <div class="tui-form__row">
            <tui-input formControlName="email" type="email">
              Email address
              <span class="tui-required"></span>
            </tui-input>
            <tui-field-error formControlName="email"></tui-field-error>
          </div>
          <div class="tui-form__row">
            <tui-input-password class="tui-space_top-2" formControlName="password">
              Password
              <span class="tui-required"></span>
            </tui-input-password>

            <tui-field-error formControlName="password"></tui-field-error>
          </div>
          <div class="tui-form__row tui-form__row_checkboxes">
            <tui-checkbox-labeled class="tui-form__checkbox" formControlName="rememberMe" size="l">
              Remember Me
            </tui-checkbox-labeled>
            <a [routerLink]="['/auth', 'forgot-password']" class="tui-text_h6">Forgot Password?</a>
          </div>
          <div class="tui-form__buttons">
            <button
              [disabled]="form.invalid"
              [showLoader]="isSignInProcessing"
              class="tui-form__button"
              size="l"
              tuiButton
              type="submit"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </form>
  `,
  styles: [
    `
      .tui-form__header {
        text-align: center;
      }

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
export class SignInFormComponent implements OnInit {
  @Input() isSignInProcessing!: boolean;
  @Input() resetForm!: boolean;

  @Output() submitForm = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      rememberMe: [false],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetForm']?.currentValue) {
      this.form.reset();
    }
  }

  onSubmit() {
    this.submitForm.emit({ ...this.form.value });
  }
}
