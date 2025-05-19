import { FooterComponent } from '../../components/footer/footer.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { LearnComponent } from '../../components/learn/learn.component';
import { FeaturedPropertiesComponent } from '../../components/featured-properties/featured-properties.component';
import { CardComponent } from '../../components/card/card.component';
import { NewsComponent } from '../../components/news/news.component';

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
