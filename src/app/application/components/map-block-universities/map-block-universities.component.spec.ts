import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBlockUniversitiesComponent } from './map-block-universities.component';

describe('MapBlockUniversitiesComponent', () => {
  let component: MapBlockUniversitiesComponent;
  let fixture: ComponentFixture<MapBlockUniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapBlockUniversitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapBlockUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
