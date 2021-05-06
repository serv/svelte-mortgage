<script lang="ts">
  import ButtonGroup from '../ButtonGroup';
  import TextField from '../TextField';

  export let mortgageLength;

  const content = [
    { display: 30, value: 30 },
    { display: 20, value: 20 },
    { display: 15, value: 15 },
    { display: 10, value: 10 }
  ];
</script>

<div class="mortgage-length">
  <div class="mb-2">Mortgage Length</div>
  <div class="flex flex-col md:flex-row">
    <div class="mr-4 w-full flex-1 mb-2 md:mb-0">
      <TextField prefix="Year" options={{ value: mortgageLength }} />
    </div>

    <div class="flex-1">
      <ButtonGroup {content} bind:inputValue={mortgageLength} />
    </div>
  </div>
</div>
