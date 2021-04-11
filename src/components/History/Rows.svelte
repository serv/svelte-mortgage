<script lang="ts">
  import Row from './Row.svelte';

  export let content;
</script>

{#each content as el, i}
  {#if i == 0}
    <Row
      start="true"
      end="true"
      id={el.id}
      homePrice={el.homePrice}
      downPayment={el.downPayment}
      percentage={el.percentage}
      mortgageLength={el.mortgageLength}
    />
  {:else}
    <Row
      start="false"
      end="true"
      id={el.id}
      homePrice={el.homePrice}
      downPayment={el.downPayment}
      percentage={el.percentage}
      mortgageLength={el.mortgageLength}
    />
  {/if}
{/each}
