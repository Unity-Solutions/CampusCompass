import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetLandingComponent } from './job-det-landing.component';

describe('JobDetLandingComponent', () => {
  let component: JobDetLandingComponent;
  let fixture: ComponentFixture<JobDetLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
