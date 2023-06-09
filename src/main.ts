import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import { provideRouter } from "@angular/router";
import {routes} from './app/app.router';
import {TokenInterceptor} from './app/common/interceptors/token.interceptor';
import {JwtInterceptor} from "./app/common/interceptors/jwt.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient} from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {TranslateStore} from "@ngx-translate/core";
import {provideStore, StoreModule} from "@ngrx/store";
import {spinnerReducer} from "./app/common/components/spinner/spinner.reducer";
import {provideRouterStore, StoreRouterConnectingModule} from "@ngrx/router-store";
import {provideStoreDevtools, StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule, provideEffects} from "@ngrx/effects";
import {AuthEffect} from "./app/common/services/auth/auth.effect";
import {authReducer} from "./app/common/services/auth/auth.reducer";
import {alertReducer} from './app/common/components/alert/alert.reducer';

// required for AOT compilation
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


const interceptorProviders = [
  // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
]

// this is where we create the store, add all the reducers here.
const mainStore = {
  auth: authReducer,
  spinner: spinnerReducer,
  alert: alertReducer
}


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    TranslateStore,
    provideStore(mainStore),
    provideRouterStore(),
    provideStoreDevtools(),
    provideEffects([
      AuthEffect
    ]),
    importProvidersFrom(
      HttpClientModule,
    ),
    ...interceptorProviders,
  ],
}).catch((err) => console.error(err));

