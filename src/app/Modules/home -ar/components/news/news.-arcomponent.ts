import { Component } from '@angular/core';
import { DatesArComponent } from './dates/dates-ar.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [DatesArComponent],
  templateUrl: './news-ar.component.html',
})
export class NewsArComponent {}
