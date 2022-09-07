import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingPermitsComponent } from './operating-permits.component';

describe('OperatingPermitsComponent', () => {
  let component: OperatingPermitsComponent;
  let fixture: ComponentFixture<OperatingPermitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatingPermitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatingPermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
