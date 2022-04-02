import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationLinkSentComponent } from './verification-link-sent.component';

describe('VerificationLinkSentComponent', () => {
  let component: VerificationLinkSentComponent;
  let fixture: ComponentFixture<VerificationLinkSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationLinkSentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationLinkSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
