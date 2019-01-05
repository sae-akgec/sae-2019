import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SigninComponent } from "./signin.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SigninComponent", () => {

  let fixture: ComponentFixture<SigninComponent>;
  let component: SigninComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SigninComponent]
    });

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
