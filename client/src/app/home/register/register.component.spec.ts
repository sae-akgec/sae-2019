import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RegisterComponent } from "./register.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("RegisterComponent", () => {

  let fixture: ComponentFixture<RegisterComponent>;
  let component: RegisterComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [RegisterComponent]
    });

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
