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
  selector: 'votee-verify-phone-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="tui-container_fullwidth">
      <div class="tui-row tui-row_sme">
        <div class="tui-col_12">
          <div class="tui-form__row">
            <tui-input formControlName="code" type="code">Verification Code</tui-input>
            <tui-field-error formControlName="code"></tui-field-error>
          </div>
          <div class="tui-form__row tui-space_left-4 tui-text_body-m extra-text">
            <tui-loader [showLoader]="isResendProcessing" [overlay]="isResendProcessing">
              <a (click)="onResendCode()">Resend Code</a>
            </tui-loader>
          </div>
          <div class="tui-form__buttons">
            <button
              [disabled]="form.invalid"
              [showLoader]="isVerifyProcessing"
              class="tui-form__button"
              size="l"
              tuiButton
              type="submit"
            >
              Verify
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

      .extra-text {
        color: var(--tui-text-01);
      }

      a {
        font: var(--tui-font-text-m);
        font-weight: bold;
        cursor: pointer;
      }

      button {
        text-decoration: none;
        font: var(--tui-font-text-m);
        color: var(--tui-text-01);
        font-weight: bold;
      }
    `,
  ],
})
export class VerifyPhoneFormComponent implements OnInit, OnChanges {
  @Input() isVerifyProcessing!: boolean;
  @Input() isResendProcessing!: boolean;
  @Input() resetForm!: boolean;

  @Output() submitForm = new EventEmitter<any>();
  @Output() resendCode = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      code: [null, [Validators.required]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetForm']?.currentValue) {
      this.form.reset();
    }
  }

  onSubmit() {
    this.submitForm.emit(this.form.value);
  }

  onResendCode() {
    this.resendCode.emit();
  }
}
