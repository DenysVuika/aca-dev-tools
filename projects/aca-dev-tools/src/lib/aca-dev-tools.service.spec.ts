import { TestBed } from '@angular/core/testing';

import { AcaDevToolsService } from './aca-dev-tools.service';

describe('AcaDevToolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcaDevToolsService = TestBed.get(AcaDevToolsService);
    expect(service).toBeTruthy();
  });
});
