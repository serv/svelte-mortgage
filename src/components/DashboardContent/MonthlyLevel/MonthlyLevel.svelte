<script lang="ts">
  import MonthlyBreakdownPieChartWrapper from './MonthlyBreakdownPieChartWrapper.svelte';
  import MonthlyArc from '../../../models/MonthlyArc';
  import config from '../../../config';

  const { monthlyArcColors } = config;

  export let principleInterest: number;
  export let insurance: number;
  export let tax: number;
  export let hoa: number;

  let principleInterestArc = new MonthlyArc(
    'Principle & Interest',
    'principleInterest',
    principleInterest,
    monthlyArcColors['principleInterest']
  );
  let insuranceArc = new MonthlyArc(
    'Insurance',
    'insurance',
    insurance,
    monthlyArcColors['insurance']
  );
  let taxArc = new MonthlyArc('Tax', 'tax', tax, monthlyArcColors['tax']);
  let hoaArc = new MonthlyArc('HOA', 'hoa', hoa, monthlyArcColors['hoa']);
  let arcs = [principleInterestArc, insuranceArc, taxArc, hoaArc];

  let total = principleInterest + insurance + tax + hoa;
</script>

<div class="flex">
  <div class="w-96">
    <MonthlyBreakdownPieChartWrapper
      {arcs}
      text={'$ ' + total}
      subtext={'Monthly payment'}
    />
  </div>
  <div class="flex flex-col">
    <div class="flex-1" />
    <div class="flex flex-1 justify-center flex-col">
      <div class="flex-1">Principle & Interest: ${principleInterest}</div>
      <div class="flex-1">Insurance: ${insurance}</div>
      <div class="flex-1">Tax: ${tax}</div>
      <div class="flex-1">HOA: ${hoa}</div>
    </div>
    <div class="flex-1" />
  </div>
</div>
