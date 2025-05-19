import { features } from './../../../constants/feature.constant';
import { Component } from '@angular/core';
import { FeatureComponent } from '../feature/feature.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [FeatureComponent],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  features = features;
}
