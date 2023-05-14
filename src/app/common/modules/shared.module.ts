import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferState } from '@angular/platform-browser';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient} from "@angular/common/http";
import {SpinnerComponent} from "../components/spinner/spinner.component";
// import {StoreModule} from "@ngrx/store";
// import {spinnerReducer} from "../components/spinner/spinner.reducer";

// required for AOT compilation
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


@NgModule({
  providers: [
    SpinnerComponent
  ],
  imports: [
    SpinnerComponent,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient, TransferState],
      }
    }),
  ],
  exports: [
    CommonModule,
    TranslateModule,
  ],
})
export class SharedModule { }