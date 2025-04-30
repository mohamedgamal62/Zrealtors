import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  icons = [
    'fa-brands fa-facebook-f ',
    'fa-brands fa-twitter',
    'fa-brands fa-linkedin-in',
    'fa-brands fa-instagram',
  ];

  selectedIcon: string | null = this.icons[0];
  selectIcon(icon: string) {
    this.selectedIcon = icon;
  }
}
