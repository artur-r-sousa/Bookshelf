import { Routes } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CategoryExpandedComponent } from './components/category-expanded/category-expanded.component';
import { HomeComponent } from './pages/home/home.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'category-expanded/:id', component: CategoryExpandedComponent },
  { path: 'details/:id', component: BookDetailsComponent }
];
