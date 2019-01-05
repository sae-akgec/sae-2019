import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MainComponent } from "./main.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("MainComponent", () => {

  let fixture: ComponentFixture<MainComponent>;
  let component: MainComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [MainComponent]
    });

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
