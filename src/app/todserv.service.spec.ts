import { TestBed } from '@angular/core/testing';

import { TodservService } from './todserv.service';

describe('TodservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodservService = TestBed.get(TodservService);
    expect(service).toBeTruthy();
  });
});
