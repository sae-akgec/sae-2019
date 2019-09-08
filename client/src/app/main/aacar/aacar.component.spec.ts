import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AacarComponent } from './aacar.component';

describe('AacarComponent', () => {
  let component: AacarComponent;
  let fixture: ComponentFixture<AacarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AacarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
