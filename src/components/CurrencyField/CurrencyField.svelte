<script lang='ts'>
  export let options;
</script>

<div class="currency-field rounded border border-red-500">
  <div class="border border-blue-500 w-10">
    $
  </div>
  <input type='text' {...options} class="border" />
</div>
