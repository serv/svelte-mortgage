<script lang="ts">
  import Button from '../Button';
  import MortgageLength from '../MortgageLength';
  import MortgageStartMonthYear from '../MortgageStartMonthYear';
  import InterestRate from '../InterestRate';
  import TextField from '../TextField';
  import DownPayment from '../DownPayment';
  import { currentId, history } from '../../services/stores';
  import Mortgage from '../../models/Mortgage';
  import dayjs from 'dayjs';
  import amortize from 'amortizationjs';
  import { round } from 'lodash-es';

  import config from '../../config';
  const {
    defaultHomePrice,
    defaultDownPaymentPercentage,
    defaultInterestRate,
    defaultMortgageLength,
    defaultPaymentCountPerYear
  } = config;

  export let homePrice: any;
  export let interestRate;
  export let mortgageLength;
  export let downPaymentPercentage;

  homePrice = homePrice ? homePrice : defaultHomePrice;
  interestRate = interestRate ? interestRate : defaultInterestRate;
  mortgageLength = mortgageLength ? mortgageLength : defaultMortgageLength;
  downPaymentPercentage = downPaymentPercentage
    ? downPaymentPercentage
    : defaultDownPaymentPercentage;

  let downPaymentAmount = (homePrice * downPaymentPercentage) / 100;

  export let loan = amortize(
    homePrice,
    downPaymentAmount,
    interestRate,
    mortgageLength,
    defaultPaymentCountPerYear
  );

  function handleClick() {
    const homePriceNumber =
      typeof homePrice === 'string'
        ? parseFloat(homePrice.replaceAll(',', ''))
        : homePrice;

    loan = amortize(
      homePriceNumber,
      downPaymentAmount,
      interestRate,
      mortgageLength,
      defaultPaymentCountPerYear
    );

    const mortgage = new Mortgage(
      loan.amount,
      round(loan.downPaymentRatio * 100, 2),
      round(loan.interest, 2),
      loan.years,
      0,
      0
    );
    history.add(mortgage);
    currentId.set(mortgage.id);
  }
</script>

<div>
  <div class="mb-6">
    <TextField
      prefix="$"
      label="Home Price"
      valueType="currency"
      options={{ value: homePrice }}
      bind:inputValue={homePrice}
    />
  </div>

  <div class="mb-6">
    <DownPayment
      {homePrice}
      bind:downPaymentPercentage
      bind:downPaymentAmount
    />
  </div>

  <div class="mb-6">
    <InterestRate bind:interestRate />
  </div>

  <div class="flex mb-6 justify-between flex-col md:flex-row">
    <div class="mb-6 md:mb-0">
      <MortgageLength bind:mortgageLength />
    </div>

    <div>
      <MortgageStartMonthYear
        defaultMonth={dayjs().month() + 1}
        defaultYear={dayjs().year()}
      />
    </div>
  </div>

  <div class="flex justify-center">
    <Button {handleClick} content="Calculate" />
  </div>
</div>
