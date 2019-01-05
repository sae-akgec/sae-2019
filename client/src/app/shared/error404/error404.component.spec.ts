import { NO_ERRORS_SCHEMA } from "@angular/core";
import { Error404Component } from "./error404.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("Error404Component", () => {

  let fixture: ComponentFixture<Error404Component>;
  let component: Error404Component;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [Error404Component]
    });

    fixture = TestBed.createComponent(Error404Component);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
