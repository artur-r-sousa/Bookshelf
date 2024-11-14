import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/BookService/book.service'; 
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, CommonModule, FormsModule],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  books: any[] = [];
  query: string = '';

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'];
      this.searchBooks();
    });
  }

  searchBooks() {
    if (this.query) {
      this.bookService.searchBooks(this.query).subscribe({
        next: (response) => {
          this.books = response.items || [];
        },
        error: (err) => {
          console.error('Error fetching books', err);
        }
      });
    }
  }

  paginate(){ }
}
