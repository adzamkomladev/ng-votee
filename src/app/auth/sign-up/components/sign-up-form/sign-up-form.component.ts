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

import { TuiCountryIsoCode } from '@taiga-ui/i18n';

@Component({
  selector: 'votee-sign-up-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="tui-container_fullwidth">
      <div class="tui-row tui-row_sme">
        <div class="tui-col_12">
          <h3 class="tui-form__header tui-form__header_margin-top_none">Let's Get Started</h3>
          <p class="tui-text_body-m">
            Tell us about yourself. We’re going to use this
            <br />information to setup your Votee account.
          </p>
          <div class="tui-form__row tui-form__row_multi-fields">
            <div class="tui-form__multi-field">
              <tui-input formControlName="firstName" type="text">
                First Name
                <span class="tui-required"></span>
              </tui-input>
              <tui-field-error formControlName="firstName"></tui-field-error>
            </div>
            <div class="tui-form__multi-field">
              <tui-input formControlName="lastName" type="text">
                Last Name
                <span class="tui-required"></span>
              </tui-input>
              <tui-field-error formControlName="lastName"></tui-field-error>
            </div>
          </div>
          <div class="tui-form__row">
            <tui-input-phone-international
              formControlName="phone"
              class="input"
              [countries]="countries"
              [(countryIsoCode)]="country"
            >
              Phone Number
              <span class="tui-required"></span>
            </tui-input-phone-international>
            <tui-field-error formControlName="phone"></tui-field-error>
          </div>
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
            <tui-checkbox-labeled class="tui-form__checkbox" formControlName="agreed" size="l">
              By registering, you agree with the <a [routerLink]="['/']">Terms of Service</a>
            </tui-checkbox-labeled>
          </div>
          <div class="tui-form__buttons">
            <button
              [disabled]="form.invalid"
              [showLoader]="isSignUpProcessing"
              class="tui-form__button"
              size="l"
              tuiButton
              type="submit"
            >
              Sign Up
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
export class SignUpFormComponent implements OnInit, OnChanges {
  @Input() resetForm!: boolean;
  @Input() isSignUpProcessing!: boolean;

  @Output() submitForm = new EventEmitter<any>();

  country!: TuiCountryIsoCode;
  readonly countries!: ReadonlyArray<TuiCountryIsoCode>;
  form!: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.countries = [TuiCountryIsoCode.GH];
    this.country = TuiCountryIsoCode.GH;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [null, [Validators.required, Validators.maxLength(50)]],
      lastName: [null, [Validators.required, Validators.maxLength(50)]],
      phone: [null, [Validators.required, Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      agreed: [false, [Validators.required]],
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
}
