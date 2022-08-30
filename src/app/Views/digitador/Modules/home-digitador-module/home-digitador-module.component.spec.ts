import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDigitadorModuleComponent } from './home-digitador-module.component';

describe('HomeDigitadorModuleComponent', () => {
  let component: HomeDigitadorModuleComponent;
  let fixture: ComponentFixture<HomeDigitadorModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDigitadorModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDigitadorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
