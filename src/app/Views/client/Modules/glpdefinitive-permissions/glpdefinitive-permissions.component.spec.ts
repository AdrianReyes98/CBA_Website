import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GLPDefinitivePermissionsComponent } from './glpdefinitive-permissions.component';

describe('GLPDefinitivePermissionsComponent', () => {
  let component: GLPDefinitivePermissionsComponent;
  let fixture: ComponentFixture<GLPDefinitivePermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GLPDefinitivePermissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GLPDefinitivePermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
