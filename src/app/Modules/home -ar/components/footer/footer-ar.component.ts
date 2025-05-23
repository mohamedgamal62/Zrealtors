import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-ar.component.html',
})
export class FooterArComponent {
  icons: string[] = [
    'fa-facebook-f ',
    'fa-twitter',
    'fa-linkedin-in',
    'fa-instagram',
  ];
  selectedIcon: string | null = this.icons[0];
  selectIcon(icon: string) {
    this.selectedIcon = icon;
  }
}
