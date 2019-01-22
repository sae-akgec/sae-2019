import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBlogsComponent } from './landing-blogs.component';

describe('LandingBlogsComponent', () => {
  let component: LandingBlogsComponent;
  let fixture: ComponentFixture<LandingBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
