import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";

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
  },
  { path: '**', redirectTo: '/login' }
];