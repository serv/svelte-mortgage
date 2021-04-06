<script lang="ts">
  import MortgageLength from '../MortgageLength';
  import MortgageStartMonthYear from '../MortgageStartMonthYear';
  import InterestRate from '../InterestRate';
  import TextField from '../TextField';
  import DownPayment from '../DownPayment';

  import config from '../../config';
  const { defaultHomePrice } = config;
  console.log(defaultHomePrice);
</script>

<div>
  <TextField
    prefix="$"
    label="Home Price"
    valueType="currency"
    options={{ value: defaultHomePrice }}
  />
  <DownPayment />
  <InterestRate />
  <MortgageLength />
  <MortgageStartMonthYear />
</div>
