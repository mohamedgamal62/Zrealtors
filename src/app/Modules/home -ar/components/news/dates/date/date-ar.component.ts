import { Dates } from '../../../../interfaces';
import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-ar.component.html',
})
export class DateArComponent {
  date = input.required<Dates>();
}
