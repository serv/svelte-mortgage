<script lang="ts">
  export let options;
  export let content;
  export let color;
  export let isDiv;
  export let handleClick;
  color = color ? color : 'blue';

  let className = `max-w-max bg-${color}-600 text-white rounded-lg px-4 py-2 border-${color}-800 hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-${color}-700 focus:ring-opacity-50`;
</script>

{#if isDiv}
  <div class={className} {...options}>{content}</div>
{:else}
  <button type="button" class={className} {...options} on:click={handleClick}
    >{content}</button
  >
{/if}
