import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElmUiAccordionComponent } from './elm-ui-accordion.component';

describe('ElmUiAccordionComponent', () => {
  let component: ElmUiAccordionComponent;
  let fixture: ComponentFixture<ElmUiAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElmUiAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElmUiAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
