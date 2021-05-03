<script lang="ts">
  import MonthlyBreakdownPieChartWrapper from './MonthlyBreakdownPieChartWrapper.svelte';
  import MonthlyArc from '../../../models/MonthlyArc';
  import PaymentItem from './PaymentItem.svelte';
  import config from '../../../config';
  import ParseHelper from '../../../utils/parse-helper';

  const { monthlyArcColors } = config;

  export let principleInterest: number;
  export let insurance: number;
  export let tax: number;
  export let hoa: number;

  $: total = calculateTotal(principleInterest, insurance, tax, hoa);

  // $: total = principleInterest + insurance + tax + hoa;

  function calculateTotal(
    principleInterest: any,
    insurance: any,
    tax: any,
    hoa: any
  ): any {
    principleInterest = principleInterest
      ? ParseHelper.parseCurrency(principleInterest)
      : 0;
    insurance = insurance ? ParseHelper.parseCurrency(insurance) : 0;
    tax = tax ? ParseHelper.parseCurrency(tax) : 0;
    hoa = hoa ? ParseHelper.parseCurrency(hoa) : 0;

    return principleInterest + insurance + tax + hoa;
  }

  $: getPrincipleInterestArc = function () {
    principleInterest = principleInterest;
    return new MonthlyArc(
      'Principle & Interest',
      'principleInterest',
      principleInterest,
      monthlyArcColors['principleInterest']
    );
  };
  $: getInsuranceArc = function () {
    insurance = insurance;
    return new MonthlyArc(
      'Insurance',
      'insurance',
      insurance,
      monthlyArcColors['insurance']
    );
  };
  $: getTaxArc = function () {
    tax = tax;
    return new MonthlyArc('Tax', 'tax', tax, monthlyArcColors['tax']);
  };
  $: getHoaArc = function () {
    hoa = hoa;
    return new MonthlyArc('HOA', 'hoa', hoa, monthlyArcColors['hoa']);
  };
  $: getArcs = function () {
    return [
      getPrincipleInterestArc(),
      getInsuranceArc(),
      getTaxArc(),
      getHoaArc()
    ];
  };
</script>

<div class="flex">
  <div class="w-80 mr-8">
    <MonthlyBreakdownPieChartWrapper
      arcs={getArcs()}
      text={total}
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
          bind:amount={principleInterest}
          color={monthlyArcColors.principleInterest}
          options={{ readOnly: true }}
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
