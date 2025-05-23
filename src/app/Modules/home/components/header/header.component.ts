import {
  Component,
  HostListener,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, Validators } from '@angular/forms';
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
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
  cities: name[] | undefined;
  categorys: name[] | undefined;
  location: string | null = 'cairo';
  category: string | null = 'Category1';
  selectedText: string | null = 'Find a Property';
  rangeValues: number[] = [6500, 15000];
  toggleRange = false;
  router = inject(Router);
  toggle() {
    this.toggleRange = !this.toggleRange;
  }
  ngOnInit() {
    this.updateMenuItems();
    this.cities = [
      { name: 'cairo' },
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'London' },
      { name: 'Istanbul' },
      { name: 'Paris' },
    ];
    this.categorys = [
      { name: 'Category1' },
      { name: 'Category2 ' },
      { name: 'Category3' },
      { name: 'Category4' },
      { name: 'Category5' },
      { name: 'Category6' },
    ];
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateMenuItems();
  }

  updateMenuItems() {
    this.items = [
      { label: 'Home' },
      { label: 'About Us' },
      { label: 'Properties' },
      { label: 'Projects' },
      { label: 'Loyalty' },
      { label: 'Our Partners' },
      { label: 'Contact Us' },
    ];

    if (window.innerWidth < 960) {
      this.items.push({
        label: 'Log-in',
        command: () => this.router.navigate(['/Sig-in']),
      });
    }
  }
}
