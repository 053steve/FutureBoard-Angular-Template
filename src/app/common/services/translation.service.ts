import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Injectable({ providedIn: 'root' })
export class TranslationService {
  constructor(private translateService: TranslateService) { }
  init(locale = 'en') {
    this.translateService.addLangs(['en', 'th']);
    this.translateService.use(locale);

    // this.translateService.onLangChange.subscribe(
    //     (langChangeEvent: LangChangeEvent) => {
    //         // TODO: Add language change event logic
    //     });
    // this.translateService.onTranslationChange.subscribe(
    //     (translationChangeEvent: TranslationChangeEvent) => {
    //         // TODO: Add translation change event logic
    //     });
    // this.translateService.onDefaultLangChange.subscribe(
    //     (defaultLangChangeEvent: DefaultLangChangeEvent) => {
    //         // TODO: Add default language change event logic
    //     });
  }

  use(lang: string) {
    console.log(lang);
    this.translateService.use(lang);
  }

}
