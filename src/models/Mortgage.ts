export default class Mortgage {
  homePrice: number;
  downPayment: number;
  interestRate: number;
  mortgageLength: number;
  startMonth: number;
  startYear: number;

  constructor(
    homePrice: number,
    downPayment: number,
    interestRate: number,
    mortgageLength: number,
    startMonth: number,
    startYear: number
  ) {
    this.homePrice = homePrice;
    this.downPayment = downPayment;
    this.interestRate = interestRate;
    this.mortgageLength = mortgageLength;
    this.startMonth = startMonth;
    this.startYear = startYear;
  }
}
