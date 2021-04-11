<script lang="ts">
  import Rows from './Rows.svelte';
  import { history } from '../../services/stores';
  import Button from '../Button';

  function handleReset() {
    history.reset();
    console.log(localStorage.getItem('history'));
  }
</script>

<div class="mb-10">
  <div class="max-h-64 overflow-y-scroll mb-4">
    <div class="flex flex-row max-w-max border-l border-r border-t">
      <div class="w-40 border-r pl-2">Home Price</div>
      <div class="w-32 border-r pl-2">Down Payment</div>
      <div class="w-32 border-r pl-2">Interest Rate</div>
      <div class="w-36 pl-2">Mortgage Length</div>
    </div>

    <Rows content={$history} />
  </div>

  <div class="flex justify-center">
    <Button handleClick={handleReset} content="Reset" />
  </div>
</div>
