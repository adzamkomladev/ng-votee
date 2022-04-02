import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'votee-forgot-password-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="tui-container_fullwidth">
      <div class="tui-row tui-row_sme">
        <div class="tui-col_12">
          <h3 class="tui-form__header tui-form__header_margin-top_none">
            <a [routerLink]="['/auth', 'sign-in']">Back to Sign in</a>
          </h3>
          <div class="tui-form__row">
            <tui-input formControlName="email" type="email"> Email address </tui-input>
            <tui-field-error formControlName="email"></tui-field-error>
          </div>
          <div class="tui-form__buttons">
            <button
              [disabled]="form.invalid"
              [showLoader]="isResetProcessing"
              class="tui-form__button"
              size="l"
              tuiButton
              type="submit"
            >
              Reset Link
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
export class ForgotPasswordFormComponent implements OnInit, OnChanges {
  @Input() resetForm!: boolean;
  @Input() isResetProcessing!: boolean;

  @Output() submitForm = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
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
