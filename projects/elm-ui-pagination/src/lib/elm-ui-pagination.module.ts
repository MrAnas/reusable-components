import { NgModule } from '@angular/core';
import { ElmUiPaginationComponent } from './elm-ui-pagination.component';
import {PaginatorModule} from 'primeng/paginator';
@NgModule({
  imports: [
    PaginatorModule
  ],
  declarations: [ElmUiPaginationComponent],
  exports: [ElmUiPaginationComponent]
})
export class ElmUiPaginationModule { }
