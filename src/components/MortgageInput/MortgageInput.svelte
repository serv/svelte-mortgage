<script lang="ts">
  import MortgageLength from '../MortgageLength';
  import MortgageStartMonthYear from '../MortgageStartMonthYear';
  import InterestRate from '../InterestRate';
  import TextField from '../TextField';
  import DownPayment from '../DownPayment';

  import config from '../../config';
  const { defaultHomePrice, defaultDownPaymentPercentage } = config;

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
  <InterestRate />
  <MortgageLength />
  <MortgageStartMonthYear />
</div>
