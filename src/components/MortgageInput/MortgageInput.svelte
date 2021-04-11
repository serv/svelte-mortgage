<script lang="ts">
  import Button from '../Button';
  import MortgageLength from '../MortgageLength';
  import MortgageStartMonthYear from '../MortgageStartMonthYear';
  import InterestRate from '../InterestRate';
  import TextField from '../TextField';
  import DownPayment from '../DownPayment';
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
  export let downPaymentPercentage = defaultDownPaymentPercentage;
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
    <DownPayment {homePrice} {downPaymentPercentage} />
  </div>

  <div class="mb-6">
    <InterestRate {defaultInterestRate} />
  </div>

  <div class="mb-6">
    <MortgageLength {defaultMortgageLength} />
  </div>

  <div class="mb-6">
    <MortgageStartMonthYear
      defaultMonth={dayjs().month() + 1}
      defaultYear={dayjs().year()}
    />
  </div>

  <div class="flex justify-center">
    <Button content="Calculate" />
  </div>
</div>
