import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileDropComponent} from "./file-drop.component";

@NgModule({
  imports: [
      CommonModule
  ],
  declarations: [
    FileDropComponent
  ],
  exports:[
    FileDropComponent
  ]
})
export class FileDropModule { }
