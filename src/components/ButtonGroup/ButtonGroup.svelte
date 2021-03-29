<script lang="ts">
  import Button from '../Button';
  export let options;
  export let content;
  export let color;
  color = color ? color : 'blue';
  content = content ? content : [];
  let className = `max-w-max bg-${color}-600 text-white px-4 py-2 border-${color}-800 hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-${color}-700 focus:ring-opacity-50`;
</script>

<div class="button-group flex">
  {#if content.length == 1}
    <Button content={content[0]} {color} isDiv="true" />
  {:else if content.length > 1}
    {#each content as el, i}
      {#if i == 0}
        <div class={className + ' rounded-l-lg'} {...options}>{content[i]}</div>
      {:else if i == content.length - 1}
        <div class={className + ' rounded-r-lg'} {...options}>
          {content[i]}
        </div>
      {:else}
        <div class={className} {...options}>
          {content[i]}
        </div>
      {/if}
    {/each}
  {:else}{/if}
</div>
