import { TestBed } from '@angular/core/testing';

import { LoginUserDataService } from './login-user-data.service';

describe('LoginUserDataService', () => {
  let service: LoginUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginUserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
