import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetInfoComponent } from './job-det-info.component';

describe('JobDetInfoComponent', () => {
  let component: JobDetInfoComponent;
  let fixture: ComponentFixture<JobDetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
