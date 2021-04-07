<script lang="ts">
  import TextField from '../TextField';

  export let homePrice;
  export let downPaymentPercentage;

  const maxPercentage = 100;
  const minPercentage = 0;
  const minAmount = 0;

  $: downPaymentAmount = calcDownPaymentAmount(
    homePrice,
    downPaymentPercentage
  );
  $: reactiveDownPaymentPercentage = calcReactiveDownPaymentPercentage(
    downPaymentAmount,
    homePrice
  );

  function calcDownPaymentAmount(homePrice, downPaymentPercentage) {
    if (typeof homePrice === 'string') {
      homePrice = Number.parseFloat(homePrice.replace(/\D/g, ''));
    }

    return (homePrice * downPaymentPercentage) / 100;
  }

  function calcReactiveDownPaymentPercentage(downPaymentAmount, homePrice) {
    if (typeof homePrice === 'string') {
      homePrice = Number.parseFloat(homePrice.replace(/\D/g, ''));
    }

    return Math.floor((downPaymentAmount / homePrice) * 100);
  }
</script>

<div class="flex flex-col">
  <div class="">Down Payment</div>
  <div class="flex">
    <div class="mr-4">
      <TextField
        prefix="$"
        valueType="number"
        maximum={homePrice}
        minimum={minAmount}
        bind:inputValue={downPaymentAmount}
        options={{ value: downPaymentAmount }}
      />
    </div>
    <TextField
      prefix="%"
      valueType="number"
      maximum={maxPercentage}
      minimum={minPercentage}
      bind:inputValue={downPaymentPercentage}
      options={{ value: reactiveDownPaymentPercentage }}
    />
  </div>
</div>
