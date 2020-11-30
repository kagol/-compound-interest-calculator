import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator/calculator.module';
import { AnnuityInsuranceCalclulatorModule } from './annuity-insurance-calclulator/annuity-insurance-calclulator.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalculatorModule,
    AnnuityInsuranceCalclulatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
