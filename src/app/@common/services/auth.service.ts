import { Injectable } from '@angular/core';

import { map, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  signInViaEmail(data: any) {
    console.log(
      `%c ${AuthService.name} - ${this.signInViaEmail.name} - ${new Date().toUTCString()}`,
      'color: red; font-weight: bolder;',
      { data }
    );

    return timer(3000);
  }

  signUpViaEmail(data: any) {
    console.log(
      `%c ${AuthService.name} - ${this.signUpViaEmail.name} - ${new Date().toUTCString()}`,
      'color: red; font-weight: bolder;',
      { data }
    );

    return timer(3000);
  }

  getCurrentUser() {}

  refreshToken() {}

  getTokenInfo() {}

  sendResetLink(data: any) {
    console.log(
      `%c ${AuthService.name} - ${this.sendResetLink.name} - ${new Date().toUTCString()}`,
      'color: blue; font-weight: bolder;',
      { data }
    );

    return timer(3000);
  }

  validateResetPasswordLink(data: any) {
    console.log(
      `%c ${AuthService.name} - ${
        this.validateResetPasswordLink.name
      } - ${new Date().toUTCString()}`,
      'color: green; font-weight: bolder;',
      { data }
    );

    return timer(3000).pipe(map(() => true));
  }

  resetPassword(data: any) {
    console.log(
      `%c ${AuthService.name} - ${this.resetPassword.name} - ${new Date().toUTCString()}`,
      'color: violet; font-weight: bolder;',
      { data }
    );

    return timer(3000);
  }

  voterSignInViaAccessKey(data: any) {
    console.log(
      `%c ${AuthService.name} - ${this.voterSignInViaAccessKey.name} - ${new Date().toUTCString()}`,
      'color: red; font-weight: bolder;',
      { data }
    );

    return timer(3000);
  }

  sendCodeToPhone(data: any) {
    console.log(
      `%c ${AuthService.name} - ${this.sendCodeToPhone.name} - ${new Date().toUTCString()}`,
      'color: red; font-weight: bolder;',
      { data }
    );

    return timer(3000);
  }

  verifyPhoneNumber(data: any) {
    console.log(
      `%c ${AuthService.name} - ${this.verifyPhoneNumber.name} - ${new Date().toUTCString()}`,
      'color: red; font-weight: bolder;',
      { data }
    );

    return timer(3000);
  }

  sendVerificationEmail(data: any) {
    console.log(
      `%c ${AuthService.name} - ${this.sendVerificationEmail.name} - ${new Date().toUTCString()}`,
      'color: red; font-weight: bolder;',
      { data }
    );

    return timer(3000);
  }
}
