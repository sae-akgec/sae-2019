import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfficarComponent } from './efficar.component';

describe('EfficarComponent', () => {
  let component: EfficarComponent;
  let fixture: ComponentFixture<EfficarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfficarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfficarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
