import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEndingBarComponent } from './news-ending-bar.component';

describe('NewsEndingBarComponent', () => {
  let component: NewsEndingBarComponent;
  let fixture: ComponentFixture<NewsEndingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsEndingBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsEndingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
