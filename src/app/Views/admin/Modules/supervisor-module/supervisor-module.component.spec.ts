import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorModuleComponent } from './supervisor-module.component';

describe('SupervisorModuleComponent', () => {
  let component: SupervisorModuleComponent;
  let fixture: ComponentFixture<SupervisorModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
