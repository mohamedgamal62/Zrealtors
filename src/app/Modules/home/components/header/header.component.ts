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
import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { Language } from '../../../../shared/translation/language.enum';

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
    TranslateModule,
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
  translate = inject(TranslateService);
  currentLang: Language = Language.En;

  toggleLanguage() {
    this.currentLang =
      this.currentLang === Language.En ? Language.Ar : Language.En;
    this.translate.use(this.currentLang);
  }
  toggle() {
    this.toggleRange = !this.toggleRange;
  }
  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.updateMenuItems();
      this.loadTranslations();
    });
  }

  loadTranslations() {
    this.cities = [
      { name: this.translate.instant('home.header.cities.cairo') },
      { name: this.translate.instant('home.header.cities.newYork') },
      { name: this.translate.instant('home.header.cities.rome') },
      { name: this.translate.instant('home.header.cities.london') },
      { name: this.translate.instant('home.header.cities.istanbul') },
      { name: this.translate.instant('home.header.cities.paris') },
    ];

    this.categorys = [
      { name: this.translate.instant('home.header.categories.category1') },
      { name: this.translate.instant('home.header.categories.category2') },
      { name: this.translate.instant('home.header.categories.category3') },
      { name: this.translate.instant('home.header.categories.category4') },
      { name: this.translate.instant('home.header.categories.category5') },
      { name: this.translate.instant('home.header.categories.category6') },
    ];
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateMenuItems();
  }

  updateMenuItems() {
    this.items = [
      { label: this.translate.instant('home.header.menu.home') },
      { label: this.translate.instant('home.header.menu.about') },
      { label: this.translate.instant('home.header.menu.properties') },
      { label: this.translate.instant('home.header.menu.projects') },
      { label: this.translate.instant('home.header.menu.loyalty') },
      { label: this.translate.instant('home.header.menu.partners') },
      { label: this.translate.instant('home.header.menu.contact') },
    ];

    if (window.innerWidth < 960) {
      this.items.push({
        label: this.translate.instant('home.header.menu.login'),
        command: () => this.router.navigate(['/Sign-in']),
      });
    }
  }
}
