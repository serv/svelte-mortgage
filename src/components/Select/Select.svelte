<script lang="ts">
  export let options;
  export let selectOptions;
  export let label;
  selectOptions = selectOptions ? selectOptions : [];
</script>

<div class="select flex flex-col">
  {#if label}
    <label class="text-field-label leading-8" for="selectInput">
      {label}
    </label>
  {/if}

  <select
    {...options}
    id="selectInput"
    class="max-w-max px-3 py-2 transition-all rounded border border-gray-300 bg-white focus:outline-none focus:ring focus:border-blue-300"
  >
    {#each selectOptions as opt}
      {#if options && options.defaultValue && opt.value === options.defaultValue}
        <option value={opt.value} selected>{opt.display}</option>
      {:else}
        <option value={opt.value}>{opt.display}</option>
      {/if}
    {/each}
  </select>
</div>
