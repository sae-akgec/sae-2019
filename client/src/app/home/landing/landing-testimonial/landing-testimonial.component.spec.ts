import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTestimonialComponent } from './landing-testimonial.component';

describe('LandingTestimonialComponent', () => {
  let component: LandingTestimonialComponent;
  let fixture: ComponentFixture<LandingTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
