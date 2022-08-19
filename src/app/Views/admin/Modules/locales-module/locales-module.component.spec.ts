import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalesModuleComponent } from './locales-module.component';

describe('LocalesModuleComponent', () => {
  let component: LocalesModuleComponent;
  let fixture: ComponentFixture<LocalesModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalesModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalesModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
