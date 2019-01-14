import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingEventsComponent } from './landing-events.component';

describe('LandingEventsComponent', () => {
  let component: LandingEventsComponent;
  let fixture: ComponentFixture<LandingEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
