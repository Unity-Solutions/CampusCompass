import { Routes } from '@angular/router';

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
    path: 'auth',
    loadChildren: () =>
      import('./modules/autorisation/autorisation.module').then(
        (m) => m.AutorisationModule
      ),
  },

];
