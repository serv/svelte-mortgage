<script lang='ts'>
  export let value;
  export let present;
  present = present ? present : (v) => v;

  value = present(value);

  function handleInput(event) {
    return value = present(event.target.value);
  }
</script>

<div class='Input'>
  <input on:input|self={handleInput} bind:value={value} >
</div>