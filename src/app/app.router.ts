import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import { AuthGuard } from './common/guards/auth.guards';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'main',
    loadComponent: () =>
      import('./main/main.component').then(
        (mod) => mod.MainComponent
      ),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/login' }
];