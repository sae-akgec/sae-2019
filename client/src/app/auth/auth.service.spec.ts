import { AuthService } from "./auth.service";
import { TestBed } from "@angular/core/testing";

describe("AuthService", () => {

  let service: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService
      ]
    });
    service = TestBed.get(AuthService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
