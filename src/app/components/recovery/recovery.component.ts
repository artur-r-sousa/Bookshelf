import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/AuthService/auth-service.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recovery.component.html',
})
export class RecoveryComponent {
  newPassword: string = '';
  token: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private authService: AuthService) {}

  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get('token') || '';
  }

  onSubmit(event: Event): void {
    event.preventDefault();
  
    if (this.newPassword && this.token) {
      this.authService.updatePassword({ newPassword: this.newPassword, token: this.token }).pipe(
        tap(() => {
          window.alert('Senha atualizada com sucesso!');
        }),
        catchError((err) => {
          console.error('Erro ao atualizar senha:', err);
          return of(null);
        }),
      ).subscribe();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  
}
