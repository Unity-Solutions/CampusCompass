import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EditorPageComponent } from './editor-page/editor-page.component'
import { QuillModule } from 'ngx-quill'
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [EditorPageComponent],
  exports: [EditorPageComponent],
  imports: [CommonModule, QuillModule, FormsModule],
})
export class NewsEditorModule {}
