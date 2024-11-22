import { Routes } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CategoryExpandedComponent } from './components/category-expanded/category-expanded.component';
import { HomeComponent } from './pages/home/home.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { LoginComponent } from './components/login-component/login-component.component';
import { ConfirmAccountComponent } from './components/confirm-account/confirm-account.component';
import { RecoveryComponent } from './components/recovery/recovery.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'category-expanded/:id', component: CategoryExpandedComponent },
  { path: 'details/:id', component: BookDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'confirm', component: ConfirmAccountComponent },
  { path: 'recovery', component: RecoveryComponent },
];
