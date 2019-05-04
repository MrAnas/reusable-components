import { TestBed, inject } from '@angular/core/testing';

import { ElmUiPaginationService } from './elm-ui-pagination.service';

describe('ElmUiPaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElmUiPaginationService]
    });
  });

  it('should be created', inject([ElmUiPaginationService], (service: ElmUiPaginationService) => {
    expect(service).toBeTruthy();
  }));
});
