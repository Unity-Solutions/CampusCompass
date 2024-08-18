import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLandingComponent } from './login-landing.component';

describe('LoginLandingComponent', () => {
  let component: LoginLandingComponent;
  let fixture: ComponentFixture<LoginLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
