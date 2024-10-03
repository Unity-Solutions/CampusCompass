import { Routes } from '@angular/router'
import { NewsPageComponent } from './news-page/news-page.component'
import { DetPageComponent } from '../news-det-page'

export const routes: Routes = [
  {
    path: 'news',
    component: NewsPageComponent,
    pathMatch: 'full',
  },

  {
    path: 'news/:id',
    component: DetPageComponent,
    pathMatch: 'full',
  },
]
