import { Component } from '@angular/core';
import { DatesComponent } from './dates/dates.component';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [DatesComponent, TranslateModule],
  templateUrl: './news.component.html',
})
export class NewsComponent {}
