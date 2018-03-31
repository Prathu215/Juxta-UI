import { TestBed, inject } from '@angular/core/testing';

import { ElectronicsListService } from './electronics-list.service';

describe('ElectronicsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectronicsListService]
    });
  });

  it('should be created', inject([ElectronicsListService], (service: ElectronicsListService) => {
    expect(service).toBeTruthy();
  }));
});
