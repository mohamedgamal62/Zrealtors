import { Dates } from '../../../../interfaces';
import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-date',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './date.component.html',
})
export class DateComponent {
  date = input.required<Dates>();
}
