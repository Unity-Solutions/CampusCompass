import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfBlockComponent } from './prof-block.component';

describe('ProfBlockComponent', () => {
  let component: ProfBlockComponent;
  let fixture: ComponentFixture<ProfBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
