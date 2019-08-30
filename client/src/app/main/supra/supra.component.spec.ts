import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupraComponent } from './supra.component';

describe('SupraComponent', () => {
  let component: SupraComponent;
  let fixture: ComponentFixture<SupraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
