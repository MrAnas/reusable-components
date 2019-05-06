import { TestBed, inject } from '@angular/core/testing';

import { ElmUiAccordionService } from './elm-ui-accordion.service';

describe('ElmUiAccordionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElmUiAccordionService]
    });
  });

  it('should be created', inject([ElmUiAccordionService], (service: ElmUiAccordionService) => {
    expect(service).toBeTruthy();
  }));
});
