<script lang="ts">
  export let start;
  export let end;
  export let homePrice;
  export let downPayment;
  export let percentage;
  export let mortgageLength;

  start = start ? start === 'true' : false;
  end = end ? end === 'true' : false;

  homePrice = homePrice ? homePrice : '0';
  downPayment = downPayment ? downPayment : '0';
  percentage = percentage ? percentage : '0';
  mortgageLength = mortgageLength ? mortgageLength : '0';

  let baseClass = processClass(start, end);

  function processClass(start, end) {
    let baseClass = 'flex flex-row max-w-max';

    if (start && end) {
      baseClass += ' border';
    } else if (start) {
      baseClass += ' border-t border-r border-l';
    } else if (end) {
      baseClass += ' border-b border-r border-l';
    } else {
      baseClass += ' border-r border-l';
    }

    return baseClass;
  }
</script>

<div class={baseClass}>
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
