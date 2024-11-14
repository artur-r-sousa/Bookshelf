import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/AuthService/auth-service.service';
import { catchError, tap } from 'rxjs/operators'; 
import { of } from 'rxjs';
import { environment } from '../../../environments/env';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  isLogin: boolean = true;
  
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.initializeGoogleLogin();
  }

  initializeGoogleLogin(): void {
    (window as any).google.accounts.id.initialize({
      client_id: environment.googleClientId,
      callback: this.handleLoginResponse.bind(this)
    });

    (window as any).google.accounts.id.renderButton(
      document.getElementById("google-signin-btn"), {
        theme: "outline",
        size: "large",
        text: "signin_with",
      }
    );
  }

  handleLoginResponse(response: any): void {
    this.authService.sendGoogleToken(response.credential).pipe(
      tap(),
      catchError((error) => {
        console.error("Erro ao enviar o ID Token para o backend", error);
        return of(null);  
      })
    ).subscribe({
      next: (backendResponse) => {
        if (backendResponse.token) {
          this.authService.saveToken(backendResponse.token); 
          this.router.navigate(['']); 
        } else {
          console.error('Erro ao fazer login: Nenhum token recebido');
        }
      },
      error: (error) => {
        
      },
      complete: () => {
        
      }
    });
  }

  
  toggleForm(): void {
    this.isLogin = !this.isLogin;
  }

  
  onSubmit(): void {
    if (this.isLogin) {
      this.onLogin(); 
    } else {
      this.onRegister(); 
    }
  }

  onLogin(): void {
    this.authService.login({ username: this.username, password: this.password }).pipe(
      tap((response) => {
        if (response.token) {
          this.authService.saveToken(response.token); 
          this.router.navigate(['']); 
        } else {
          console.error('Erro ao fazer login: Nenhum token recebido');
        }
      })
    ).subscribe({
      error: (error) => console.error('Erro ao fazer login:', error)
    });
  }
  

  onRegister(): void {
    this.authService.register({ username: this.username, password: this.password }).pipe(
      tap((response) => {
        if (response.token) {
          this.authService.saveToken(response.token);
          this.router.navigate(['']);
        } else {
          console.error('Erro ao cadastrar usuário: Nenhum token recebido');
        }
      })
    ).subscribe({
      error: (error) => console.error('Erro ao cadastrar usuário:', error)
    });
  }
  
}
