import { Dates } from './../../../interfaces/new-dates.interface';
import { Component } from '@angular/core';
import { DateComponent } from './date/date.component';
import { dates } from '../../../constants/news-dates.constant';

@Component({
  selector: 'app-dates',
  standalone: true,
  imports: [DateComponent],
  templateUrl: './dates.component.html',
})
export class DatesComponent {
  dates: Dates[] = dates;
}
