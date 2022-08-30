import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitadorComponent } from './digitador.component';

describe('DigitadorComponent', () => {
  let component: DigitadorComponent;
  let fixture: ComponentFixture<DigitadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
