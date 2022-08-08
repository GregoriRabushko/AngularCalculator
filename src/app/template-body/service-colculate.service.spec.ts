import { TestBed } from '@angular/core/testing';

import { ServiceColculateService } from './service-colculate.service';

describe('ServiceColculateService', () => {
  let service: ServiceColculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceColculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
