import { TestBed } from '@angular/core/testing';

import { EtatModeService } from './etat-mode.service';

describe('EtatModeService', () => {
  let service: EtatModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
