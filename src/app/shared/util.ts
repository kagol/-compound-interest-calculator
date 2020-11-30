import numeral from 'numeral';

const interestRate = (rate: number, periods: number): number => {
  return Math.pow(1 + rate, periods);
}

/**
 * 单利 - 一次性支付
 * @param principal 
 * @param rate 
 * @param periods 
 */
export const calcInterest = (principal: number, rate: number, periods: number): number => {
  return 0;
}

/**
 * 单利 - 等额多次支付
 * @param principal 
 * @param rate 
 * @param periods 
 */
export const calcInterestEqualMultiple = (principal: number, rate: number, periods: number): number => {
  return 0;
}

/**
 * 复利 - 一次性支付
 * @param principal 
 * @param rate 
 * @param periods 
 */
export const calcCompoundInterest = (principal: number, rate: number, periods: number): number => {
  return principal * interestRate(rate, periods);
}

/**
 * 复利 - 等额多次支付
 * @param principal 
 * @param rate 
 * @param periods 
 */
export const calcCompoundInterestEqualMultiple = (principal: number, periods: number, rate: number): number => {
  return principal * (interestRate(rate, periods) - 1) / rate;
}

export const percent = (value: number): string => {
  return numeral(value).format('0%');
}
