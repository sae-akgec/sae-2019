import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingContactComponent } from './landing-contact.component';

describe('LandingContactComponent', () => {
  let component: LandingContactComponent;
  let fixture: ComponentFixture<LandingContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
