import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorModuleComponent } from './inspector-module.component';

describe('InspectorModuleComponent', () => {
  let component: InspectorModuleComponent;
  let fixture: ComponentFixture<InspectorModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectorModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
