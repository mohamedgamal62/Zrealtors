import { FooterComponent } from './footer/footer.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LearnComponent } from './learn/learn.component';
import { FeaturedPropertiesComponent } from './featured-properties/featured-properties.component';
import { CardComponent } from './card/card.component';
import { NewsComponent } from './news/news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    LearnComponent,
    FeaturedPropertiesComponent,
    CardComponent,
    NewsComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
