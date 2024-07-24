import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersNewsComponent } from './pers-news.component';

describe('PersNewsComponent', () => {
  let component: PersNewsComponent;
  let fixture: ComponentFixture<PersNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
