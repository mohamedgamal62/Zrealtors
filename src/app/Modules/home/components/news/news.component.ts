import { Component } from '@angular/core';
import { DatesComponent } from './dates/dates.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [DatesComponent],
  templateUrl: './news.component.html',
})
export class NewsComponent {}
