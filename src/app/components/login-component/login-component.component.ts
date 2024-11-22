import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class LoginComponent implements OnInit, AfterViewInit {
  email: string = '';
  username: string = '';
  password: string = '';
  isLogin: boolean = true;
  isRecoveringPassword: boolean = false;
  confirmationMessage: string | null = null;
  isLoading: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.initializeGoogleLogin();
  }

  ngAfterViewInit(): void {
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
    });
  }

  handleLoginResponse(response: any): void {
    this.isLoading = true;
    this.authService.sendGoogleToken(response.credential).pipe(
      tap((backendResponse) => {
        if (backendResponse.status === 201) {
          this.confirmationMessage = "Usuário criado com sucesso. Por favor, confirme seu e-mail.";
          this.isLogin = true;
        } else if (backendResponse.body?.token) {
          this.authService.saveToken(backendResponse.body.token);
          this.router.navigate(['']);
        } else {
          console.error('Erro ao fazer login: Nenhum token recebido');
        }
      }),
      catchError((error) => {
        console.error("Erro ao enviar o ID Token para o backend", error);
        return of(null);
      }),
      tap((response) => {
        this.confirmationMessage = response.body?.message;
        window.alert(this.confirmationMessage);
        this.isLoading = false; 
      })
    ).subscribe();
  }


  toggleForm(): void {
    if (!this.isRecoveringPassword) {
      this.isLogin = !this.isLogin;
    } else {
      this.isRecoveringPassword = false;
    }
    this.confirmationMessage = null; 
  }

  onSubmit(): void {
    if (this.isLogin) {
      this.onLogin();
    } else {
      this.onRegister();
    }
  }

  onLogin(): void {
    this.authService.login({ username: this.username, password: this.password, email: this.email }).pipe(
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
    this.isLoading = true;
    this.authService.register({ username: this.username, password: this.password, email: this.email }).pipe(
      tap((response) => {
        if (response.status === 201 && response.body?.message) {
          this.confirmationMessage = "Usuário criado com sucesso. Por favor, confirme seu e-mail.";
          this.isLogin = true; 
        }
      }),
      catchError((error) => {
        console.error('Erro ao cadastrar usuário:', error);
        return of(null);
      }),
      tap((response) => {
        this.confirmationMessage = response.message;
        this.isLoading = false; 
      })
    ).subscribe();
  }

  onRecoverPassword(): void {
    if (!this.email) {
      console.error('Por favor, preencha o e-mail');
      return;
    }

    this.authService.recoverPassword({ email: this.email }).pipe(
      tap(() => {
        window.alert('Solicitação de recuperação de senha enviada com sucesso.');
      }),
      catchError((error) => {
        console.error('Erro ao enviar solicitação de recuperação de senha:', error);
        return of(null);
      })
    ).subscribe();
  }

  goToRecoverPassword(): void {
    this.isRecoveringPassword = true;
    this.confirmationMessage = null;
    this.email = '';
  }
}
