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
  currentLang = 'en';

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);
  }
  toggle() {
    this.toggleRange = !this.toggleRange;
  }
  ngOnInit() {
    this.updateMenuItems();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.updateMenuItems();
    });
    this.loadTranslations();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadTranslations();
    });
  }
  loadTranslations() {
    this.translate
      .get([
        'home.header.cities.cairo',
        'home.header.cities.newYork',
        'home.header.cities.rome',
        'home.header.cities.london',
        'home.header.cities.istanbul',
        'home.header.cities.paris',
        'home.header.categories.category1',
        'home.header.categories.category2',
        'home.header.categories.category3',
        'home.header.categories.category4',
        'home.header.categories.category5',
        'home.header.categories.category6',
      ])
      .subscribe((translations) => {
        this.cities = [
          { name: translations['home.header.cities.cairo'] },
          { name: translations['home.header.cities.newYork'] },
          { name: translations['home.header.cities.rome'] },
          { name: translations['home.header.cities.london'] },
          { name: translations['home.header.cities.istanbul'] },
          { name: translations['home.header.cities.paris'] },
        ];

        this.categorys = [
          { name: translations['home.header.categories.category1'] },
          { name: translations['home.header.categories.category2'] },
          { name: translations['home.header.categories.category3'] },
          { name: translations['home.header.categories.category4'] },
          { name: translations['home.header.categories.category5'] },
          { name: translations['home.header.categories.category6'] },
        ];
      });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateMenuItems();
  }

  updateMenuItems() {
    this.translate
      .get([
        'home.header.menu.home',
        'home.header.menu.about',
        'home.header.menu.properties',
        'home.header.menu.projects',
        'home.header.menu.loyalty',
        'home.header.menu.partners',
        'home.header.menu.contact',
        'home.header.menu.login',
      ])
      .subscribe((translations) => {
        this.items = [
          { label: translations['home.header.menu.home'] },
          { label: translations['home.header.menu.about'] },
          { label: translations['home.header.menu.properties'] },
          { label: translations['home.header.menu.projects'] },
          { label: translations['home.header.menu.loyalty'] },
          { label: translations['home.header.menu.partners'] },
          { label: translations['home.header.menu.contact'] },
        ];

        if (window.innerWidth < 960) {
          this.items.push({
            label: translations['home.header.menu.login'],
            command: () => this.router.navigate(['/Sign-in']),
          });
        }
      });
  }
}
