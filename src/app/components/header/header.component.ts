import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/AuthService/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class HeaderComponent implements OnInit {
  query: string = '';
  books: any[] = [];
  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();  
  }

  onSearch(): void {
    if (this.query) {
      this.router.navigate(['/search-results'], { queryParams: { query: this.query } });
    }
  }

  login(): void {
    this.router.navigate(['/login']);  
  }

  logout(): void {
    this.authService.logout();  
    this.isLoggedIn = false;    
    this.router.navigate(['/']);  
  }
}

