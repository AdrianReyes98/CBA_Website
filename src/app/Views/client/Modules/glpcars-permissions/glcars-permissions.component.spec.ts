import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GLCarsPermissionsComponent } from './glcars-permissions.component';

describe('GLCarsPermissionsComponent', () => {
  let component: GLCarsPermissionsComponent;
  let fixture: ComponentFixture<GLCarsPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GLCarsPermissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GLCarsPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
