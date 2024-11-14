import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/env';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  isLoggedIn: boolean = false;
  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials);
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getUserFromToken(): any {
    const token = this.getToken();
    if (!token) return null;
    
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;  
  }

  register(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, credentials); 
  }

  sendGoogleToken(idToken: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/google`,  idToken);
  }
}
