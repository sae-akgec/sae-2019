import { NO_ERRORS_SCHEMA } from "@angular/core";
import { EventComponent } from "./event.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("EventComponent", () => {

  let fixture: ComponentFixture<EventComponent>;
  let component: EventComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [EventComponent]
    });

    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
