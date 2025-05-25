import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule , TranslateModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
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
