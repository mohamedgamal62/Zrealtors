import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature } from '../../../interfaces';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent {
  feature = input.required<Feature>();
}
