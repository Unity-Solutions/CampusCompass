import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetSubComponent } from './job-det-sub.component';

describe('JobDetSubComponent', () => {
  let component: JobDetSubComponent;
  let fixture: ComponentFixture<JobDetSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetSubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
