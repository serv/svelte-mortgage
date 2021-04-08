<script lang="ts">
  export let start;
  export let end;
  export let homePrice;
  export let downPayment;
  export let percentage;
  export let mortgageLength;

  start = start ? start : false;
  end = end ? end : false;
  homePrice = homePrice ? homePrice : '0';
  downPayment = downPayment ? downPayment : '0';
  percentage = percentage ? percentage : '0';
  mortgageLength = mortgageLength ? mortgageLength : '0';

  let base = processClass(start, end);

  function processClass(start, end) {
    let base = 'flex flex-row max-w-max';

    if (start && end) {
      base += ' border';
    } else if (start) {
      base += ' border-t border-r border-l';
    } else if (end) {
      base += ' border-b border-r border-l';
    } else {
      base += ' border-r border-l';
    }

    return base;
  }
</script>

<div class={base}>
  <div class="w-40 border-r pl-2">
    $ {homePrice}
  </div>
  <div class="w-24 border-r pl-2">
    {downPayment} %
  </div>
  <div class="w-24 border-r pl-2">
    {percentage} %
  </div>
  <div class="w-24 pl-2">
    {mortgageLength}
  </div>
</div>
