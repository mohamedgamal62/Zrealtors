import { Component, input } from '@angular/core';
import { Feature } from '../Feature-model';
import { CommonModule } from '@angular/common';
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
