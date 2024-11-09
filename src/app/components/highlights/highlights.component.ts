import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/BookService/book.service';
import { CommonModule } from '@angular/common';
import { CurrencySymbolPipe } from '../../utils/currency-symbol.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [CommonModule, CurrencySymbolPipe, RouterModule],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBestsellers().subscribe((response) => {
      console.log(response.items[0].id)
      this.books = response.items.map((item: any) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors?.join(', '),
        price: item.saleInfo?.retailPrice?.amount,
        currency: item.saleInfo?.retailPrice?.currencyCode,
        thumbnail: item.volumeInfo.imageLinks?.thumbnail,
      }));
    });
  }
}
