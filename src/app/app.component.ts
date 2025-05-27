import { Language } from './shared/translation/language.enum';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

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
