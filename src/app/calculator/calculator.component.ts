import { Component, Input, OnInit } from '@angular/core';
import numeral from 'numeral';
import { calcCompoundInterestEqualMultiple } from '../shared/util';

const exist = (value) => value || value === 0;
const allExist = (...arr) => arr.every(exist);

@Component({
  selector: 'd-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  @Input() principal: number; // 本金
  @Input() periods: number; // 计息期数
  @Input() rate: number; // 利率
  @Input() fetureValue: number; // 本利和

  get result(): number {
    console.log('this.principal:', this.principal);
    let result;
    if (allExist(this.principal, this.periods, this.rate)) {
      console.log('计算本利和');
      result = numeral(calcCompoundInterestEqualMultiple(this.principal, this.periods, this.rate)).format('0,0.00');
    }
    if (allExist(this.principal, this.rate, this.fetureValue)) {
      console.log('计算计息期数');
    }
    if (allExist(this.periods, this.rate, this.fetureValue)) {
      console.log('计算本金');
    }
    if (allExist(this.principal, this.periods, this.fetureValue)) {
      console.log('计算利率');
    }
    return result;
  }

  timeUnit = '年';
  moneyUnit = '元';

  // private _rateInterest = 0.05; // 利率
  // public get rateInterestPercent() {
  //   return percent(this._rateInterest);
  // }

  // private _principal = 10000; // 本金

  // private _periods = 10; // 计息期数

  // private _fetureValue = 1000000; // 本金和（元）

  // public get _compoundAmountEqualMultiplePayments() {
  //   console.log('this._principal:', this._principal);
  //   console.log('this._rateInterest:', this._rateInterest);
  //   console.log('this._periods:', this._periods);
  //   return calcCompoundInterestEqualMultiple(
  //     this._principal, 
  //     this._periods,
  //     this._rateInterest, 
  //   );
  // }

  constructor() { }

  ngOnInit(): void {
    // const compoundAmountOneTimePaymeny = calcCompoundInterest(this._principal, this._rateInterest, this._periods);
    // const compoundAmountEqualMultiplePayments = calcCompoundInterestEqualMultiple(this._principal, this._rateInterest, this._periods);
    // console.log('compoundAmountOneTimePaymeny:', compoundAmountOneTimePaymeny);
    // console.log('compoundAmountEqualMultiplePayments:', compoundAmountEqualMultiplePayments);
  }

}
