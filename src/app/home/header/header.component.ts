import { Component, ViewEncapsulation } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { Slider } from 'primeng/slider';
import { Select } from 'primeng/select';
interface name {
  name: string;
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenubarModule,
    BadgeModule,
    CommonModule,
    RouterModule,
    FormsModule,
    FloatLabel,
    Select,
    Slider,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
  cities: name[] | undefined;
  Category: name[] | undefined;
  Price: name[] | undefined;
  value1: string = 'New York';
  value2: string = 'New York';
  value3: string = 'New York';
  selectedText: string | null = 'Find a Property';
  rangeValues: number[] = [6.5, 100];
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
      },
      {
        label: 'About Us',
      },
      {
        label: 'Properties',
      },
      {
        label: 'Projects',
      },
      {
        label: 'Loyalty',
      },
      {
        label: 'Our Partners',
      },
      {
        label: 'Contact Us',
      },
    ];
    this.cities = [
      { name: 'cairo' },
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'London' },
      { name: 'Istanbul' },
      { name: 'Paris' },
    ];
    this.Category = [
      { name: 'Category1' },
      { name: 'Category2 ' },
      { name: 'Category3' },
      { name: 'Category4' },
      { name: 'Category5' },
      { name: 'Category6' },
    ];
    this.Price = [
      { name: '$6,500 - $15,000' },
      { name: '$15,000 - $20,000 ' },
      { name: '$20,000 - $30,000' },
      { name: '$30,000 - $40,000' },
      { name: '$40,000 - $50,000' },
      { name: '$50,000 - $100,000' },
    ];
  }
}
