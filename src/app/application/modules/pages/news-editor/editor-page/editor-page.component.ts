import { Component } from '@angular/core'

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor-page.component.html',
  styleUrl: './editor-page.component.scss',
})
export class EditorPageComponent {
  editorContent: string = ''
  onContentChange(event: any) {
    this.editorContent = event.html
  }
  sendContent() {
    console.log('Текст из редактора:', this.editorContent)
  }
}
