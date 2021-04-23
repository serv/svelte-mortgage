<script lang="ts">
  import MonthlyBreakdownPieChartWrapper from './MonthlyBreakdownPieChartWrapper.svelte';
  import MonthlyArc from '../../../models/MonthlyArc';
  import PaymentItem from './PaymentItem.svelte';
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
    <div class="flex flex-1 justify-center flex-col">
      <div class="flex-1">
        <h3 class="text-lg font-bold">Monthly Payment Calculation</h3>
      </div>
      <div class="flex-1">
        <PaymentItem
          name={'Principle & Interest'}
          amount={principleInterest}
          color={monthlyArcColors.principleInterest}
        />
      </div>
      <div class="flex-1">
        <PaymentItem
          name={'Insurance'}
          amount={insurance}
          color={monthlyArcColors.insurance}
        />
      </div>
      <div class="flex-1">
        <PaymentItem name={'Tax'} amount={tax} color={monthlyArcColors.tax} />
      </div>
      <div class="flex-1 border-b">
        <PaymentItem name={'HOA'} amount={hoa} color={monthlyArcColors.hoa} />
      </div>
      <div class="flex-1 text-right font-bold">
        Total monthly payment = $ {total}
      </div>
    </div>
  </div>
</div>
