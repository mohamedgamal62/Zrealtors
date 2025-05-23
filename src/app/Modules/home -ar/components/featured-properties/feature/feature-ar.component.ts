
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature } from '../../../interfaces';
@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-ar.component.html',
  styleUrls: ['./feature-ar.component.scss'],
})
export class FeatureArComponent {
  feature = input.required<Feature>();
}
