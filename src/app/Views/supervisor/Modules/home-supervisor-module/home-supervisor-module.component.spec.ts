import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSupervisorModuleComponent } from './home-supervisor-module.component';

describe('HomeSupervisorModuleComponent', () => {
  let component: HomeSupervisorModuleComponent;
  let fixture: ComponentFixture<HomeSupervisorModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSupervisorModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSupervisorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
