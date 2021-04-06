<script lang="ts">
  import MortgageLength from '../MortgageLength';
  import MortgageStartMonthYear from '../MortgageStartMonthYear';
  import InterestRate from '../InterestRate';
  import TextField from '../TextField';
</script>

<div>
  <TextField prefix="$" label="Home Price" valueType="currency" />
  <!-- Downpayment amoutn and percentage -->
  <InterestRate />
  <MortgageLength />
  <MortgageStartMonthYear />
</div>
