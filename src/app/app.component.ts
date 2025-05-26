import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Language } from './Modules/auth/enums/language.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  isArabic = false;

  constructor(private translate: TranslateService) {
    this.isArabic = this.translate.currentLang === Language.Ar;
    this.translate.onLangChange.subscribe((event) => {
      this.isArabic = event.lang === Language.Ar;
    });
    this.translate.setDefaultLang(Language.En);
    this.translate.use(Language.En); 
  }
}
