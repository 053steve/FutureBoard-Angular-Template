import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {LoginComponent} from "./app/login/login.component";
import { provideRouter, Routes } from "@angular/router";
import {routes} from './app/app.router';
import {TokenInterceptor} from './app/common/interceptors/token.interceptor';
import {JwtInterceptor} from "./app/common/interceptors/jwt.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";


const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    ...interceptorProviders
  ],
}).catch((err) => console.error(err));

