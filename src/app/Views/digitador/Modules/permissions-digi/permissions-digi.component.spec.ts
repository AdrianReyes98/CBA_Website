import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsDigiComponent } from './permissions-digi.component';

describe('PermissionsDigiComponent', () => {
  let component: PermissionsDigiComponent;
  let fixture: ComponentFixture<PermissionsDigiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionsDigiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissionsDigiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
