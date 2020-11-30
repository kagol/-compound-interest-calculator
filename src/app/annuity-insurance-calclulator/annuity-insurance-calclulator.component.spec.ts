import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuityInsuranceCalclulatorComponent } from './annuity-insurance-calclulator.component';

describe('AnnuityInsuranceCalclulatorComponent', () => {
  let component: AnnuityInsuranceCalclulatorComponent;
  let fixture: ComponentFixture<AnnuityInsuranceCalclulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuityInsuranceCalclulatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuityInsuranceCalclulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
