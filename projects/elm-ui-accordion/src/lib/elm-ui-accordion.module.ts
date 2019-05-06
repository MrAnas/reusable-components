import { NgModule } from '@angular/core';
import { ElmUiAccordionComponent } from './elm-ui-accordion.component';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  imports: [
    AccordionModule
  ],
  declarations: [ElmUiAccordionComponent],
  exports: [ElmUiAccordionComponent]
})
export class ElmUiAccordionModule { }
