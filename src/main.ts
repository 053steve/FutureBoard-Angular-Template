import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import { provideRouter, Routes } from "@angular/router";
import {routes} from './app/app.router';
import {TokenInterceptor} from './app/common/interceptors/token.interceptor';
import {JwtInterceptor} from "./app/common/interceptors/jwt.interceptor";
import {HTTP_INTERCEPTORS, HttpHandler} from "@angular/common/http";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient} from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";


import {importProvidersFrom} from "@angular/core";

// required for AOT compilation
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    ...interceptorProviders,
    importProvidersFrom(HttpClientModule)
  ],
}).catch((err) => console.error(err));

