import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElmUiPanelsComponent } from './elm-ui-panels.component';

describe('ElmUiPanelsComponent', () => {
  let component: ElmUiPanelsComponent;
  let fixture: ComponentFixture<ElmUiPanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElmUiPanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElmUiPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
