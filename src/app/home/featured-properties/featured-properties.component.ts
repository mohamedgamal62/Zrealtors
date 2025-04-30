import { Component } from '@angular/core';
import { FeaturesComponent } from "./features/features.component";

@Component({
  selector: 'app-featured-properties',
  standalone: true,
  imports: [FeaturesComponent],
  templateUrl: './featured-properties.component.html',
  styleUrl: './featured-properties.component.css'
})
export class FeaturedPropertiesComponent {

}
