
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature } from '../../../interfaces';
@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent {
  feature = input.required<Feature>();
}
