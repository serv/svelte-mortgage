<script lang="ts">
  import Button from '../Button';
  export let options;
  export let content;
  export let color;
  export let inputValue;
  color = color ? color : 'blue';
  content = content ? content : [];
  let className = `max-w-max max-h-11 bg-${color}-600 text-white px-4 py-2 border-${color}-800 cursor-pointer hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-${color}-700 focus:ring-opacity-50`;

  let contentType;
  const firstContent = content.length > 0 ? content[0] : null;
  if (firstContent) {
    if (
      typeof firstContent === 'number' ||
      typeof firstContent === 'string' ||
      typeof firstContent === 'object'
    ) {
      contentType = typeof firstContent;
    }
  }

  function handleClick(event) {
    if (!event) {
      return;
    }

    inputValue = event.target.getAttribute('data-value');
  }
</script>

<div class="button-group flex">
  {#if content.length == 1}
    <Button content={content[0]} {color} isDiv="true" />
  {:else if content.length > 1}
    {#each content as el, i}
      {#if contentType === 'number' || contentType === 'string'}
        {#if i == 0}
          <div
            class={className + ' rounded-l-lg'}
            on:click={handleClick}
            {...options}
          >
            {content[i]}
          </div>
        {:else if i == content.length - 1}
          <div
            class={className + ' rounded-r-lg'}
            on:click={handleClick}
            {...options}
          >
            {content[i]}
          </div>
        {:else}
          <div class={className} on:click={handleClick} {...options}>
            {content[i]}
          </div>
        {/if}
      {:else if contentType === 'object'}
        {#if i === 0}
          <div
            class={className + ' rounded-l-lg'}
            on:click={handleClick}
            data-value={el.value}
            {...options}
          >
            {el.display}
          </div>
        {:else if i === content.length - 1}
          <div
            class={className + ' rounded-r-lg'}
            on:click={handleClick}
            data-value={el.value}
            {...options}
          >
            {el.display}
          </div>
        {:else}
          <div
            class={className}
            on:click={handleClick}
            data-value={el.value}
            {...options}
          >
            {el.display}
          </div>
        {/if}
      {/if}
    {/each}
  {/if}
</div>
