import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudLandingComponent } from './stud-landing.component';

describe('StudLandingComponent', () => {
  let component: StudLandingComponent;
  let fixture: ComponentFixture<StudLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
