import { Component } from '@angular/core';
import { FeaturesComponent } from './features/features.component';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-featured-properties',
  standalone: true,
  imports: [FeaturesComponent, TranslateModule],
  templateUrl: './featured-properties.component.html',
})
export class FeaturedPropertiesComponent {}
