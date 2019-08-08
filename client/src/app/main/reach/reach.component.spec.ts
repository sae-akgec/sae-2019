import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachComponent } from './reach.component';

describe('ReachComponent', () => {
  let component: ReachComponent;
  let fixture: ComponentFixture<ReachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
