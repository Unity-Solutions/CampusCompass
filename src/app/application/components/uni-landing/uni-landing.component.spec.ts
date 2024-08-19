import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniLandingComponent } from './uni-landing.component';

describe('UniLandingComponent', () => {
  let component: UniLandingComponent;
  let fixture: ComponentFixture<UniLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
