import { NgModule } from '@angular/core';
import { ElmUiFileuploadComponent } from './elm-ui-fileupload.component';
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  imports: [
    FileUploadModule
  ],
  declarations: [ElmUiFileuploadComponent],
  exports: [ElmUiFileuploadComponent]
})
export class ElmUiFileuploadModule { }
