<script lang="ts">
  import ColorLegend from './ColorLegend.svelte';
  import TextField from '../../TextField';

  export let name: string;
  export let color: string;
  export let amount: number;
  export let options;

  name = name ? name : '';
  amount = amount ? amount : 0;
  options = options ? options : {};

  options.value = amount;
</script>

<div class="flex items-center">
  <div class="flex flex-1 items-center">
    <div class="mr-4 md:block hidden">
      <ColorLegend {color} />
    </div>
    <div>
      {name}
    </div>
  </div>

  <div class="flex flex-1 justify-end items-center">
    <div class="mr-4">+</div>
    <div class="w-36">
      <TextField
        prefix="$"
        valueType="currency"
        {options}
        bind:inputValue={amount}
      />
    </div>
  </div>
</div>
