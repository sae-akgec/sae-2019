import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NavbarComponent", () => {

  let fixture: ComponentFixture<NavbarComponent>;
  let component: NavbarComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NavbarComponent]
    });

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
