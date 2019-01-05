import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TeamComponent } from "./team.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("TeamComponent", () => {

  let fixture: ComponentFixture<TeamComponent>;
  let component: TeamComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [TeamComponent]
    });

    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
