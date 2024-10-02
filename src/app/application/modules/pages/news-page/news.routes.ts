import { Routes } from '@angular/router'
import { NewsPageComponent } from './news-page/news-page.component'

export const routes: Routes = [
  {
    path: 'news',
    component: NewsPageComponent,
    pathMatch: 'full',
  },
]
