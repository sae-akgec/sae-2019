import { NO_ERRORS_SCHEMA } from "@angular/core";
import { WorkshopComponent } from "./workshop.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("WorkshopComponent", () => {

  let fixture: ComponentFixture<WorkshopComponent>;
  let component: WorkshopComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [WorkshopComponent]
    });

    fixture = TestBed.createComponent(WorkshopComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
