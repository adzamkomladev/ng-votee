import { TestBed } from '@angular/core/testing';

import { ValidResetPasswordLinkGuard } from './valid-reset-password-link.guard';

describe('ValidResetPasswordLinkGuard', () => {
  let guard: ValidResetPasswordLinkGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidResetPasswordLinkGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
