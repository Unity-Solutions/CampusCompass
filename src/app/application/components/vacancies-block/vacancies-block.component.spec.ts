import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesBlockComponent } from './vacancies-block.component';

describe('VacanciesBlockComponent', () => {
  let component: VacanciesBlockComponent;
  let fixture: ComponentFixture<VacanciesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacanciesBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacanciesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
