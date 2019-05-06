import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElmUiFileuploadComponent } from './elm-ui-fileupload.component';

describe('ElmUiFileuploadComponent', () => {
  let component: ElmUiFileuploadComponent;
  let fixture: ComponentFixture<ElmUiFileuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElmUiFileuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElmUiFileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
