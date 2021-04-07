<script lang="ts">
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
  <TextField
    prefix="$"
    label="Home Price"
    valueType="currency"
    options={{ value: defaultHomePrice }}
    bind:inputValue={homePrice}
  />
  <DownPayment {homePrice} {downPaymentPercentage} />
  <InterestRate {defaultInterestRate} />
  <MortgageLength {defaultMortgageLength} />
  <MortgageStartMonthYear
    defaultMonth={dayjs().month() + 1}
    defaultYear={dayjs().year()}
  />
</div>
