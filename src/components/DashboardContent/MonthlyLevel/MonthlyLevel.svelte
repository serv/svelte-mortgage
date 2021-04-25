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

  $: total = calculateTotal(principleInterest, insurance, tax, hoa);

  // $: total = principleInterest + insurance + tax + hoa;

  function calculateTotal(
    principleInterest: any,
    insurance: any,
    tax: any,
    hoa: any
  ): any {
    principleInterest = principleInterest
      ? parseInt(principleInterest)
      : principleInterest;
    insurance = insurance ? parseInt(insurance) : insurance;
    tax = tax ? parseInt(tax) : tax;
    hoa = hoa ? parseInt(hoa) : hoa;

    return principleInterest + insurance + tax + hoa;
  }
</script>

<div class="flex">
  <div class="w-80 mr-8">
    <MonthlyBreakdownPieChartWrapper
      {arcs}
      text={'$ ' + total}
      subtext={'Monthly payment'}
    />
  </div>
  <div class="flex flex-col w-96">
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
          bind:amount={insurance}
          color={monthlyArcColors.insurance}
        />
      </div>
      <div class="flex-1">
        <PaymentItem
          name={'Tax'}
          bind:amount={tax}
          color={monthlyArcColors.tax}
        />
      </div>
      <div class="flex-1 border-b">
        <PaymentItem
          name={'HOA'}
          bind:amount={hoa}
          color={monthlyArcColors.hoa}
        />
      </div>
      <div class="flex-1 text-right font-bold">
        Total monthly payment = $ {total}
      </div>
    </div>
  </div>
</div>
