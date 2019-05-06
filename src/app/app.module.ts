import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {ElmUiPaginationModule} from 'elm-ui-pagination';
import {ElmUiAccordionModule} from 'elm-ui-accordion';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElmUiPaginationModule,
    ElmUiAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
