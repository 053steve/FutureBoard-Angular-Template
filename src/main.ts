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
    TranslateStore,
    provideStore({
      spinner: spinnerReducer
    }),
    provideRouterStore(),
    provideStoreDevtools(),
    provideEffects(),
    importProvidersFrom(
      HttpClientModule,
    )
  ],
}).catch((err) => console.error(err));

