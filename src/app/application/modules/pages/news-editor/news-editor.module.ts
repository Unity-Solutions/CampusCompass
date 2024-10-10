import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EditorPageComponent } from './editor-page/editor-page.component'
import { QuillModule } from 'ngx-quill'

@NgModule({
  declarations: [EditorPageComponent],
  exports: [EditorPageComponent],
  imports: [CommonModule, QuillModule],
})
export class NewsEditorModule {}
