<script lang="ts">
  import TextField from '../TextField';

  export let homePrice;
  export let downPayment;
  export let percentage;
  export let mortgageLength;

  homePrice = homePrice ? homePrice : '0';
  downPayment = downPayment ? downPayment : '0';
  percentage = percentage ? percentage : '0';
  mortgageLength = mortgageLength ? mortgageLength : '0';
</script>

<div class="flex flex-row">
  <div class="mr-3 w-40">
    <TextField
      prefix="🏠"
      valueType="currency"
      options={{ readOnly: true, value: homePrice }}
    />
  </div>
  <div class="mr-3 w-24">
    <TextField prefix="⬇" options={{ readOnly: true, value: downPayment }} />
  </div>
  <div class="mr-3 w-24">
    <TextField prefix="%" options={{ readOnly: true, value: percentage }} />
  </div>
  <div
    class="bg-yellow-500 text-white font-bold tracking-widest px-3 pt-2 rounded"
  >
    {mortgageLength}
  </div>
</div>
