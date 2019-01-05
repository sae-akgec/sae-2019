import { CoreService } from "./core.service";
import { TestBed } from "@angular/core/testing";

describe("CoreService", () => {

  let service: CoreService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoreService
      ]
    });
    service = TestBed.get(CoreService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
