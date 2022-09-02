import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisionsClientModuleComponent } from './permisions-client-module.component';

describe('PermisionsClientModuleComponent', () => {
  let component: PermisionsClientModuleComponent;
  let fixture: ComponentFixture<PermisionsClientModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisionsClientModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisionsClientModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
