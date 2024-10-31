import { TestBed } from '@angular/core/testing';

import { BusinessImpactAnalysisService } from './business-impact-analysis.service';

describe('BusinessImpactAnalysisService', () => {
  let service: BusinessImpactAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessImpactAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
