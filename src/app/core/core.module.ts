import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferState } from '@angular/platform-browser';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient} from "@angular/common/http";
import { FormsModule } from '@angular/forms';


// required for AOT compilation
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


@NgModule({
  providers: [
  ],
  imports: [

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
    FormsModule,
    CommonModule,
    TranslateModule,
  ],
})
export class CoreModule { }