import { TestBed } from '@angular/core/testing';

import { CurrentUsersService } from './current-users.service';

describe('CurrentUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentUsersService = TestBed.get(CurrentUsersService);
    expect(service).toBeTruthy();
  });
});
