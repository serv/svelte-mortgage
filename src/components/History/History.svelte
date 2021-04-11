<script lang="ts">
  import Rows from './Rows.svelte';
  import { history } from '../../services/stores';
  import Button from '../Button';

  let baseClass = 'max-h-64 mb-4';
  $: {
    if ($history.length > 0) {
      baseClass = 'max-h-64 mb-4 overflow-y-scroll';
    } else {
      baseClass = 'max-h-64 mb-4';
    }
  }

  function handleReset() {
    history.reset();
  }
</script>

<div class="mb-10">
  <div class={baseClass}>
    {#if $history.length > 0}
      <div class="flex flex-row max-w-max border-l border-r border-t">
        <div class="w-40 border-r pl-2">Home Price</div>
        <div class="w-32 border-r pl-2">Down Payment</div>
        <div class="w-32 border-r pl-2">Interest Rate</div>
        <div class="w-36 border-r pl-2">Mortgage Length</div>
        <div class="w-16 pl-2">Delete</div>
      </div>
    {:else}
      <div class="flex flex-row max-w-max border">
        <div class="w-40 border-r pl-2">Home Price</div>
        <div class="w-32 border-r pl-2">Down Payment</div>
        <div class="w-32 border-r pl-2">Interest Rate</div>
        <div class="w-36 border-r pl-2">Mortgage Length</div>
        <div class="w-16 pl-2">Delete</div>
      </div>
      <div class="flex w-full border-l border-r border-b justify-center py-6">
        No result
      </div>
    {/if}

    {#if $history.length > 0}
      <Rows content={$history} />
    {/if}
  </div>

  <div class="flex justify-center">
    <Button handleClick={handleReset} content="🗑️ Reset" />
  </div>
</div>
