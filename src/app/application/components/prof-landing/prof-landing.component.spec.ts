import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfLandingComponent } from './prof-landing.component';

describe('ProfLandingComponent', () => {
  let component: ProfLandingComponent;
  let fixture: ComponentFixture<ProfLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
