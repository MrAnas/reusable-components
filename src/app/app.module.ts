import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ElmUiPaginationModule} from 'elm-ui-pagination';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ElmUiPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
