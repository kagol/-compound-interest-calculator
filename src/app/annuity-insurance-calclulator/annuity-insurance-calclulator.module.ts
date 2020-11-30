import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumberModule, SelectModule } from 'ng-devui';

import { AnnuityInsuranceCalclulatorComponent } from './annuity-insurance-calclulator.component';

@NgModule({
  declarations: [AnnuityInsuranceCalclulatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputNumberModule,
    SelectModule,
  ],
  exports: [
    AnnuityInsuranceCalclulatorComponent
  ]
})
export class AnnuityInsuranceCalclulatorModule { }
