import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaudadoresModuleComponent } from './recaudadores-module.component';

describe('RecaudadoresModuleComponent', () => {
  let component: RecaudadoresModuleComponent;
  let fixture: ComponentFixture<RecaudadoresModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecaudadoresModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecaudadoresModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
