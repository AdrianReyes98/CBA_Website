import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientModuleComponent } from './client-module.component';

describe('ClientModuleComponent', () => {
  let component: ClientModuleComponent;
  let fixture: ComponentFixture<ClientModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
