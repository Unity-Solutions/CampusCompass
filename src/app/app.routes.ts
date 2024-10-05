import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./application/application.module').then(
        (m) => m.ApplicationModule
      ),
  },
];
