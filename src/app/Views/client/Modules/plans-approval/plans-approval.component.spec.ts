import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansApprovalComponent } from './plans-approval.component';

describe('PlansApprovalComponent', () => {
  let component: PlansApprovalComponent;
  let fixture: ComponentFixture<PlansApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
