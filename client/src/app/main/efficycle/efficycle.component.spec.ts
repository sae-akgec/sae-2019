import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfficycleComponent } from './efficycle.component';

describe('EfficycleComponent', () => {
  let component: EfficycleComponent;
  let fixture: ComponentFixture<EfficycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfficycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfficycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
