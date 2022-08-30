import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitadorModuleComponent } from './digitador-module.component';

describe('DigitadorModuleComponent', () => {
  let component: DigitadorModuleComponent;
  let fixture: ComponentFixture<DigitadorModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitadorModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitadorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
