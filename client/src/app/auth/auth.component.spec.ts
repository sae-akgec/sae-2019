import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AuthComponent", () => {

  let fixture: ComponentFixture<AuthComponent>;
  let component: AuthComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AuthComponent]
    });

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
