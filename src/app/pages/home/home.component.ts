import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { HighlightsComponent } from '../../components/highlights/highlights.component';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomePosterComponent } from '../../components/home-poster/home-poster.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    BannerComponent,
    HighlightsComponent,
    CategoriesComponent,
    HomePosterComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
