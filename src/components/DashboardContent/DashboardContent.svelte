<script lang="ts">
  import MonthlyLevel from './MonthlyLevel';
  import config from '../../config';
  import AmortizationTable from './AmortizationTable/AmortizationTable.svelte';
  const defaultAmount = config.monthlyArcAmounts;

  export let principleInterest;
  export let insurance;
  export let tax;
  export let hoa;
  export let loan;

  principleInterest = principleInterest ? principleInterest : 0;
  insurance = insurance ? insurance : defaultAmount.insurnace;
  tax = tax ? tax : defaultAmount.tax;
  hoa = hoa ? hoa : defaultAmount.hoa;
</script>

<div>
  <MonthlyLevel bind:principleInterest {insurance} {tax} {hoa} />
  <AmortizationTable {loan} />
</div>
