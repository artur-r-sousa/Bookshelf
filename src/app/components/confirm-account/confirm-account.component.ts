import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/env';
import { AuthService } from '../../services/AuthService/auth-service.service';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.component.html',
  styleUrls: ['./confirm-account.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ConfirmAccountComponent implements OnInit {
  private apiUrl = `${environment.apiUrl}/`;
  isLoading = true;
  isError = false;

  userData = {};

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (token) {
      this.confirmAccount(token);
    } else {
      this.isError = true;
      this.isLoading = false;
    }
  }

  confirmAccount(token: string): void {
    this.http.get(`${this.apiUrl}confirm?token=${token}`).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/confirm'])
      },
      error: () => {
        this.isError = true;
        this.isLoading = false;
      }
    });
  }

  
}
