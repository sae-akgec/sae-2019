import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingWorkshopsComponent } from './landing-workshops.component';

describe('LandingWorkshopsComponent', () => {
  let component: LandingWorkshopsComponent;
  let fixture: ComponentFixture<LandingWorkshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingWorkshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingWorkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
