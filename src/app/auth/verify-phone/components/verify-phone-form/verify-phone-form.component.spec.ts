import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyPhoneFormComponent } from './verify-phone-form.component';

describe('VerifyPhoneFormComponent', () => {
  let component: VerifyPhoneFormComponent;
  let fixture: ComponentFixture<VerifyPhoneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyPhoneFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyPhoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
