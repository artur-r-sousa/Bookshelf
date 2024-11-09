import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../models/Category/Category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/`);
  }

  getBooksByCategory(categoryId: number, maxResults: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/books?categoryId=${categoryId}&maxResults=${maxResults}`);
  }
}
