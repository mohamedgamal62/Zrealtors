import { Component } from '@angular/core';
import { dates } from '../../../constants/news-dates.constant';
import { Dates } from '../../../interfaces';
import { DateArComponent } from './date/date-ar.component';

@Component({
  selector: 'app-dates',
  standalone: true,
  imports: [DateArComponent],
  templateUrl: './dates-ar.component.html',
})
export class DatesArComponent {
  dates: Dates[] = dates;
}
