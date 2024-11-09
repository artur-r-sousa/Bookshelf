import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryExpandedComponent } from './category-expanded.component';

describe('CategoryExpandedComponent', () => {
  let component: CategoryExpandedComponent;
  let fixture: ComponentFixture<CategoryExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryExpandedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
