import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetCompanyComponent } from './job-det-company.component';

describe('JobDetCompanyComponent', () => {
  let component: JobDetCompanyComponent;
  let fixture: ComponentFixture<JobDetCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
