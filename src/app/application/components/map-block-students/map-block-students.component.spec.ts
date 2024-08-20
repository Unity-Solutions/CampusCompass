import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBlockStudentsComponent } from './map-block-students.component';

describe('MapBlockStudentsComponent', () => {
  let component: MapBlockStudentsComponent;
  let fixture: ComponentFixture<MapBlockStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapBlockStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapBlockStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
