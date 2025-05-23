import { Dates } from '../../../../interfaces';
import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date.component.html',
})
export class DateComponent {
  date = input.required<Dates>();
}
