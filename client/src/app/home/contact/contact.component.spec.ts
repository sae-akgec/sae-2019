import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ContactComponent", () => {

  let fixture: ComponentFixture<ContactComponent>;
  let component: ContactComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ContactComponent]
    });

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
