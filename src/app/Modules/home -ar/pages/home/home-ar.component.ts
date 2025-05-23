import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderArComponent } from '../../components/header/header-ar.component';
import { LearnArComponent } from '../../components/learn/learn-ar.component';
import { FeaturedPropertiesArComponent } from '../../components/featured-properties/featured-properties-ar.component';
import { CardArComponent } from '../../components/card/card-ar.component';
import { NewsArComponent } from '../../components/news/news.-arcomponent';
import { FooterArComponent } from '../../components/footer/footer-ar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    HeaderArComponent,
    LearnArComponent,
    FeaturedPropertiesArComponent,
    CardArComponent,
    NewsArComponent,
    FooterArComponent,
  ],
  templateUrl: './home-ar.component.html',
})
export class HomeArComponent {}
