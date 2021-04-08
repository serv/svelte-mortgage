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

<div class="flex flex-row border max-w-max">
  <div class="w-40">
    {homePrice}
  </div>
  <div class="w-24">
    {downPayment}
  </div>
  <div class="w-24">
    {percentage}
  </div>
  <div class="w-24">
    {mortgageLength}
  </div>
</div>
