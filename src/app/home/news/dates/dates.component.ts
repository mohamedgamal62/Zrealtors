import { Component } from '@angular/core';
import { DateComponent } from "./date/date.component";
let dates = [
  {
    day: '30',
    mounth: 'June',
    data: 'New event in cairo is launching soon',
    color: 'text-[#649BC0]',
    bg: 'bg-[#E3F0FC]',
  },
  {
    day: '16',
    mounth: 'June',
    data: 'The future of investment in the new administrative capital',
    color: 'text-[#8965BD]',
    bg: 'bg-[#E7DCF7]',
  },
  {
    day: '12',
    mounth: 'June',
    data: 'How to invest in new cities ',
    color: 'text-[#6E7230]',
    bg: 'bg-[#F6F8D4]',
  },
  {
    day: '05',
    mounth: 'June',
    data: 'New launches in 6 October !!',
    color: 'text-[#D86666]',
    bg: 'bg-[#F4E8E8]',
  },
];

@Component({
  selector: 'app-dates',
  standalone: true,
  imports: [DateComponent],
  templateUrl: './dates.component.html',
  styleUrl: './dates.component.css',
})
export class DatesComponent {
  dates = dates;
}
