import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../models/Category/Category.model';
import { environment } from '../../../environments/env';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/`);
  }

  getBooksByCategory(categoryId: number, maxResults: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/books?categoryId=${categoryId}&maxResults=${maxResults}`);
  }
}
