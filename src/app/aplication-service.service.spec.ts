import { TestBed } from '@angular/core/testing';

import { AplicationServiceService } from './aplication-service.service';

describe('AplicationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AplicationServiceService = TestBed.get(AplicationServiceService);
    expect(service).toBeTruthy();
  });
});
