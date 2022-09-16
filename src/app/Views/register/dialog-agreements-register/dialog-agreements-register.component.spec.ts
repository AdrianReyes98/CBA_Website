import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAgreementsRegisterComponent } from './dialog-agreements-register.component';

describe('DialogAgreementsRegisterComponent', () => {
  let component: DialogAgreementsRegisterComponent;
  let fixture: ComponentFixture<DialogAgreementsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAgreementsRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAgreementsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
