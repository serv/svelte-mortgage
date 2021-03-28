<script lang="ts">
  export let options;
  export let selectOptions;
  selectOptions = selectOptions ? selectOptions : [];
</script>

<div class="select">
  <select
    {...options}
    class="w-full p-1.5 transition-all rounded border border-gray-300 bg-white focus:outline-none focus:ring focus:border-blue-300"
  >
    {#each selectOptions as opt}
      <option value={opt.value}>{opt.display}</option>
    {/each}
  </select>
</div>
