import { TestBed } from '@angular/core/testing';

import { TestLoaderService } from './test-loader.service';

describe('TestLoaderService', () => {
  let service: TestLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
