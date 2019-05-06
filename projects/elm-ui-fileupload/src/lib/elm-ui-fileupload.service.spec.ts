import { TestBed, inject } from '@angular/core/testing';

import { ElmUiFileuploadService } from './elm-ui-fileupload.service';

describe('ElmUiFileuploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElmUiFileuploadService]
    });
  });

  it('should be created', inject([ElmUiFileuploadService], (service: ElmUiFileuploadService) => {
    expect(service).toBeTruthy();
  }));
});
