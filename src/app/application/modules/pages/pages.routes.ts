import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./news-page/news-page.module').then((m) => m.NewsPageModule),
  }
];
