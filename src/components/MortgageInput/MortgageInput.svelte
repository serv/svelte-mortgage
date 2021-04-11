<script lang="ts">
  import Button from '../Button';
  import MortgageLength from '../MortgageLength';
  import MortgageStartMonthYear from '../MortgageStartMonthYear';
  import InterestRate from '../InterestRate';
  import TextField from '../TextField';
  import DownPayment from '../DownPayment';
  import { history } from '../../services/stores';
  import Mortgage from '../../models/Mortgage';
  import * as dayjs from 'dayjs';

  import config from '../../config';
  const {
    defaultHomePrice,
    defaultDownPaymentPercentage,
    defaultInterestRate,
    defaultMortgageLength
  } = config;

  const currentDate = dayjs();

  let homePrice = defaultHomePrice;
  let interestRate = defaultInterestRate;
  let mortgageLength = defaultMortgageLength;
  export let downPaymentPercentage = defaultDownPaymentPercentage;
  $: downPaymentAmount = (homePrice * downPaymentPercentage) / 100;

  function handleClick() {
    const mortgage = new Mortgage(
      homePrice,
      downPaymentPercentage,
      interestRate * 100,
      mortgageLength,
      0,
      0
    );
    history.add(mortgage);
  }
</script>

<div>
  <div class="mb-6">
    <TextField
      prefix="$"
      label="Home Price"
      valueType="currency"
      options={{ value: defaultHomePrice }}
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
    <InterestRate {defaultInterestRate} bind:interestRate />
  </div>

  <div class="mb-6">
    <MortgageLength {defaultMortgageLength} bind:mortgageLength />
  </div>

  <div class="mb-6">
    <MortgageStartMonthYear
      defaultMonth={dayjs().month() + 1}
      defaultYear={dayjs().year()}
    />
  </div>

  <div class="flex justify-center">
    <Button {handleClick} content="Calculate" />
  </div>
</div>
