<script lang="ts">
  import Rows from './Rows.svelte';
  import { history } from '../../services/stores';
</script>

<div class="max-h-64 overflow-y-scroll">
  <div class="flex flex-row max-w-max border-l border-r border-t">
    <div class="w-40 border-r pl-2">Home Price</div>
    <div class="w-32 border-r pl-2">Down Payment</div>
    <div class="w-32 border-r pl-2">Interest Rate</div>
    <div class="w-36 pl-2">Mortgage Length</div>
  </div>

  <Rows content={$history} />
</div>
