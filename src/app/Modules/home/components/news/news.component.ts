import { News } from './../../interfaces/_news';
import { Component } from '@angular/core';
import { DatesComponent } from './dates/dates.component';
import { TranslateModule } from '@ngx-translate/core';
import { news } from '../../constants/news';
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [DatesComponent, TranslateModule],
  templateUrl: './news.component.html',
})
export class NewsComponent {
  news: News[] = news;
}
