<script lang="ts">
  import { history, currentId } from '../../services/stores';

  export let start;
  export let end;
  export let homePrice;
  export let downPayment;
  export let percentage;
  export let mortgageLength;
  export let id;

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

  function onDelete(e) {
    const id = e.target.getAttribute('data-id');

    history.remove(id);
  }

  function onSelect(e) {
    const id = e.target.getAttribute('data-id');
    console.log(id);

    currentId.set(id);
  }
</script>

<div data-id={id} class={baseClass}>
  <div class="w-40 border-r pl-2">
    <div
      on:click={onSelect}
      data-id={id}
      class="cursor-pointer w-max text-blue-600 hover:underline"
    >
      $ {homePrice}
    </div>
  </div>
  <div class="w-32 border-r pl-2">
    {downPayment} %
  </div>
  <div class="w-32 border-r pl-2">
    {percentage} %
  </div>
  <div class="w-36 border-r pl-2">
    {mortgageLength}
  </div>
  <div class="w-16 pl-2">
    <div data-id={id} on:click={onDelete} class="w-max cursor-pointer">❌</div>
  </div>
</div>
