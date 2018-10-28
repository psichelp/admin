import { TestBed } from '@angular/core/testing';

import { DengodbService } from './dengodb.service';

describe('DengodbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DengodbService = TestBed.get(DengodbService);
    expect(service).toBeTruthy();
  });
});
