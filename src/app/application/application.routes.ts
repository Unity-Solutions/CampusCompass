import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./modules/pages/pages.module').then((m) => m.PagesModule),
  },

  {
    path: 'news',
    loadChildren: () =>
      import('./modules/pages/news-page/news-page.module').then(
        (m) => m.NewsPageModule
      ),
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/pages/autorisation/autorisation.module').then(
        (m) => m.AutorisationModule
      ),
  },
]
