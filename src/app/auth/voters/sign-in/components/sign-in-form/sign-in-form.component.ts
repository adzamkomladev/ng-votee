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
  selector: 'votee-voter-sign-in-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="tui-container_fullwidth">
      <div class="tui-row tui-row_sme">
        <div class="tui-col_12">
          <div class="tui-form__row">
            <tui-input formControlName="accessKey" type="accessKey">Access Key</tui-input>
            <tui-field-error formControlName="accessKey"></tui-field-error>
          </div>
          <div class="tui-form__row tui-space_left-4 tui-text_body-m extra-text ">
            Access keys are 16-character codes provided by your election administrator.
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
              Cast Your Vote
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
        text-decoration: none;
        font: var(--tui-font-text-m);
        color: var(--tui-text-01);
        font-weight: bold;
      }
    `,
  ],
})
export class SignInFormComponent implements OnInit, OnChanges {
  @Input() accessKey!: string | null;
  @Input() resetForm!: boolean;
  @Input() isSignInProcessing!: boolean;

  @Output() submitForm = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      accessKey: [this.accessKey, [Validators.required]],
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
