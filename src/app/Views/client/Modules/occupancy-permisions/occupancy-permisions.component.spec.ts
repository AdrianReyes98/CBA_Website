import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupancyPermisionsComponent } from './occupancy-permisions.component';

describe('OccupancyPermisionsComponent', () => {
  let component: OccupancyPermisionsComponent;
  let fixture: ComponentFixture<OccupancyPermisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccupancyPermisionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupancyPermisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
