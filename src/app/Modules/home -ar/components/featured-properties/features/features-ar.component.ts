import { features } from './../../../constants/feature.constant';
import { Component } from '@angular/core';
import { FeatureArComponent } from '../feature/feature-ar.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [FeatureArComponent],
  templateUrl: './features-ar.component.html',
  styleUrls: ['./features-ar.component.scss'],
})
export class FeaturesArComponent {
  features = features;
}
