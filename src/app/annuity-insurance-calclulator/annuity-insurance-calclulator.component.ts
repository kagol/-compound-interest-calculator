import { Component, Input, OnInit } from '@angular/core';
import numeral from 'numeral';

import { calcCompoundInterest } from '../shared/util';

const EFFECTIVE_YEAR = 5;

const calcAnnuityInsuranceSimple = (principal, periods, rate = 0.05) => {
  const validPeriods = periods - EFFECTIVE_YEAR;
  if (validPeriods <= 0) {
    return principal;
  }
  return calcCompoundInterest(principal, validPeriods, rate);
}

const calcAnnuityInsuranceLuxurious = (principal, periods, rate = 0.05) => {
  return principal;
}

const map = new Map();
map.set(3, calcAnnuityInsuranceSimple);
map.set(5, calcAnnuityInsuranceSimple);
map.set(10, calcAnnuityInsuranceLuxurious);

@Component({
  selector: 'd-annuity-insurance-calclulator',
  templateUrl: './annuity-insurance-calclulator.component.html',
  styleUrls: ['./annuity-insurance-calclulator.component.scss']
})
export class AnnuityInsuranceCalclulatorComponent implements OnInit {
  @Input() principal: number; // 本金
  @Input() periods: number; // 计息期数

  get result(): number {
    return numeral(map.get(this.currentOption.value)(this.principal, this.periods, this.rate)).format('0,0.00');
  }

  rate = 0.05;
  timeUnit = '年';
  moneyUnit = '元';
  options = [
    { name: '3', value: 3 },
    { name: '5', value: 5 },
    { name: '10', value: 10 },
  ];
  currentOption = { name: '3', value: 3 };

  constructor() { }

  ngOnInit(): void {
  }

}
