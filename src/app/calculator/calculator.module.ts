import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'ng-devui';

import { CalculatorComponent } from './calculator.component';

@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputNumberModule
  ],
  exports: [
    CalculatorComponent
  ]
})
export class CalculatorModule { }
