<script lang="ts">
  import { tick } from 'svelte';

  export let options;
  export let value;
  export let present;
  export let shouldTick;
  present = present ? present : (v) => v;

  if (options && options.value) {
    value = options.value;
  }

  value = present(value);

  async function handleInput(event) {
    let position = event.target.selectionStart;
    value = present(event.target.value, event);

    if (shouldTick) {
      await tick();
    }

    event.target.selectionEnd = position;
    return;
  }
</script>

<input {...options} on:input|self={handleInput} bind:value />
