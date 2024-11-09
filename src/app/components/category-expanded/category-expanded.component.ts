import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { CategoryService } from '../../services/CategoryService/category-service.service';
import { CurrencySymbolPipe } from '../../utils/currency-symbol.pipe';

@Component({
  selector: 'app-category-expanded',
  templateUrl: './category-expanded.component.html',
  styleUrls: ['./category-expanded.component.css'],
  standalone: true,
  imports: [CommonModule, CurrencySymbolPipe, RouterModule]
})
export class CategoryExpandedComponent implements OnInit {
  categoryId: number = 0;
  books$: Observable<any> | null = null; 

  constructor(
    private route: ActivatedRoute, 
    private categoryService: CategoryService 
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = +params['id']; 
      console.log('Categoria ID:', this.categoryId);
  
    
      this.books$ = this.categoryService.getBooksByCategory(this.categoryId, 10).pipe(
        map(response => response.items) 
      );
    });
  }
}
