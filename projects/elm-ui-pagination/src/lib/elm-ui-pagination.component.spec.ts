import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElmUiPaginationComponent } from './elm-ui-pagination.component';

describe('ElmUiPaginationComponent', () => {
  let component: ElmUiPaginationComponent;
  let fixture: ComponentFixture<ElmUiPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElmUiPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElmUiPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
