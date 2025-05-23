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
  selector: 'app-headerAr',
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
  templateUrl: './header-ar.component.html',
  styleUrls: ['./header-ar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderArComponent {
  items: MenuItem[] | undefined;
  cities: name[] | undefined;
  categorys: name[] | undefined;
  location: string | null = 'cairo';
  category: string | null = 'Category1';
  selectedText: string | null = 'Find a Property';
  rangeValues: number[] = [6500, 15000];
  toggleRange = false;
  router = inject(Router);
  currentLang: 'ar' | 'en' = 'ar';
  toggleLanguage() {
    this.currentLang = 'en';
    this.router.navigate(['/']);
  }
  toggle() {
    this.toggleRange = !this.toggleRange;
  }
  ngOnInit() {
    this.updateMenuItems();
    this.cities = [
      { name: 'القاهرة' },
      { name: 'نيويورك' },
      { name: 'روما' },
      { name: 'لندن' },
      { name: 'إسطنبول' },
      { name: 'باريس' },
    ];

    this.categorys = [
      { name: 'الفئة 1' },
      { name: 'الفئة 2' },
      { name: 'الفئة 3' },
      { name: 'الفئة 4' },
      { name: 'الفئة 5' },
      { name: 'الفئة 6' },
    ];
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateMenuItems();
  }

  updateMenuItems() {
    this.items = [
      { label: 'الرئيسية' },
      { label: 'من نحن' },
      { label: 'العقارات' },
      { label: 'المشاريع' },
      { label: 'الولاء' },
      { label: 'شركاؤنا' },
      { label: 'تواصل معنا' },
    ];

    if (window.innerWidth < 960) {
      this.items.push({
        label: 'تسجيل دخول',
        command: () => this.router.navigate(['/sig-in-ar']),
      });
    }
  }
}
