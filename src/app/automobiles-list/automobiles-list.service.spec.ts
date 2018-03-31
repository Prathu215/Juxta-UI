import { TestBed, inject } from '@angular/core/testing';

import { AutomobilesListService } from './automobiles-list.service';

describe('AutomobilesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutomobilesListService]
    });
  });

  it('should be created', inject([AutomobilesListService], (service: AutomobilesListService) => {
    expect(service).toBeTruthy();
  }));
});
