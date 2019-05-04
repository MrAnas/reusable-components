import { TestBed, inject } from '@angular/core/testing';

import { ElmUiPanelsService } from './elm-ui-panels.service';

describe('ElmUiPanelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElmUiPanelsService]
    });
  });

  it('should be created', inject([ElmUiPanelsService], (service: ElmUiPanelsService) => {
    expect(service).toBeTruthy();
  }));
});
