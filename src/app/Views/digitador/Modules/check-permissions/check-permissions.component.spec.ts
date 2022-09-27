import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPermissionsComponent } from './check-permissions.component';

describe('CheckPermissionsComponent', () => {
  let component: CheckPermissionsComponent;
  let fixture: ComponentFixture<CheckPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckPermissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
