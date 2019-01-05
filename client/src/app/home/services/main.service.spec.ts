import { MainService } from "./main.service";
import { TestBed } from "@angular/core/testing";

describe("MainService", () => {

  let service: MainService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MainService
      ]
    });
    service = TestBed.get(MainService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
