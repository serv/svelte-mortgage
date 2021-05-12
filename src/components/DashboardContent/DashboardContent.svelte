<script lang="ts">
  import MonthlyLevel from './MonthlyLevel';
  import config from '../../config';
  import AmortizationTable from './AmortizationTable/AmortizationTable.svelte';
  const defaultAmount = config.monthlyArcAmounts;

  export let insurance;
  export let tax;
  export let hoa;
  export let loan;

  $: principleInterest = loan ? loan.monthlyPayment : 0;
  insurance = insurance ? insurance : defaultAmount.insurnace;
  tax = tax ? tax : defaultAmount.tax;
  hoa = hoa ? hoa : defaultAmount.hoa;
</script>

<div>
  <div class="mb-12 px-10 py-6 bg-white rounded-lg shadow-md">
    <MonthlyLevel {principleInterest} {insurance} {tax} {hoa} />
  </div>
  <div class="py-6 md:px-10 bg-white rounded-lg shadow-md">
    <AmortizationTable {loan} />
  </div>
</div>
