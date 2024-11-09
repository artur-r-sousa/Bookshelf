import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) {}

  searchBooks(query: string, startIndex: number = 0, maxResults: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('query', query)
      .set('startIndex', startIndex)
      .set('maxResults', maxResults);

    return this.http.get<any>(`${this.apiUrl}/search`, { params });
    
  }

  getBestsellers(maxResults: number = 10): Observable<any> {
    return this.http.get(`${this.apiUrl}/bestsellers?maxResults=${maxResults}`);
  }

  getBookDetails(bookId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/details/${bookId}`);
  }
  
}
