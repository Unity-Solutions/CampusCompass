import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LogInComponent } from './log-in/log-in.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'reg',
    pathMatch: 'prefix',
  },
  {
    path: 'reg',
    component: RegistrationComponent,
  },
  {
    path: 'login',
    component: LogInComponent,
  },
];
