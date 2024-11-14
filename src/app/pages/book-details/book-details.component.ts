import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule, Location } from '@angular/common';
import { map } from 'rxjs/operators';
import { CurrencySymbolPipe } from '../../utils/currency-symbol.pipe';
import { BookService } from '../../services/BookService/book.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  standalone: true,
  imports: [CommonModule, CurrencySymbolPipe]
})
export class BookDetailsComponent implements OnInit {
  bookId: string = '';
  book$: Observable<any> | null = null;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = params['id'];
      
      this.book$ = this.bookService.getBookDetails(this.bookId).pipe(
        map(response => response)
      );
    });
  }

  goBack() {
    this.location.back();
  }
}
