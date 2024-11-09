import { Component } from '@angular/core';
import { BookService } from '../../services/BookService/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule]
})
export class HeaderComponent {
  query: string = '';
  books: any[] = [];
  searchQuery: string = '';

  constructor(private router: Router, private bookService: BookService) { }

  onSearch(): void {
    console.log('teste 222')
    if (this.query) {
      console.log('teste 2')
      this.router.navigate(['/search-results'], { queryParams: { query: this.query } });
      console.log('teste 3')
    }
  }
  
}

