import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  isArabic = false;
  constructor(private translate: TranslateService) {
    this.isArabic = this.translate.currentLang === 'ar';
    this.translate.onLangChange.subscribe((event) => {
      this.isArabic = event.lang === 'ar';
    });
  }
}
