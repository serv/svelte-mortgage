<script lang="ts">
  import TextField from '../TextField';

  export let interestRate;

  $: apr = (function () {
    if (!interestRate) {
      return 0;
    }

    interestRate = Number.parseFloat(interestRate);

    let floating = Math.pow(1 + interestRate / 100 / 12, 12) - 1;
    return (floating * 100).toFixed(5);
  })();
</script>

<div class="flex">
  <div class="mr-4">
    <TextField
      label="Interest Rate"
      prefix="%"
      valueType="number"
      bind:inputValue={interestRate}
      options={{ value: interestRate }}
    />
  </div>

  <TextField
    label="APR"
    prefix="%"
    valueType="number"
    options={{ readOnly: true, value: apr }}
  />
</div>
