import { Routes } from '@angular/router'
import { NewsPageComponent } from './news-page/news-page.component'
import { DetPageComponent } from '../news-det-page'
import { EditorPageComponent } from '../news-editor/editor-page/editor-page.component'

export const routes: Routes = [
  {
    path: 'news',
    component: NewsPageComponent,
    pathMatch: 'full',
  },

  {
    path: 'news/editor',
    component: EditorPageComponent,
    pathMatch: 'full',
  },

  // {
  //   path: 'news/:id',
  //   component: DetPageComponent,
  //   pathMatch: 'full',
  // },
]
