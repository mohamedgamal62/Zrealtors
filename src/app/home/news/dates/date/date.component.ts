import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
interface date {
  day: string;
  mounth: string;
  data: string;
  color: string;
  bg: string;
}
@Component({
  selector: 'app-date',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css',
})
export class DateComponent {
  date = input.required<date>();
}
