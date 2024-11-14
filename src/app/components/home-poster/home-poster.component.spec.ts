import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePosterComponent } from './home-poster.component';

describe('HomePosterComponent', () => {
  let component: HomePosterComponent;
  let fixture: ComponentFixture<HomePosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePosterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
