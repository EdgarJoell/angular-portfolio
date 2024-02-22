import { TestBed } from '@angular/core/testing';

import { GlobalFuncsService } from './global-funcs.service';

describe('GlobalFuncsService', () => {
  let service: GlobalFuncsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalFuncsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
