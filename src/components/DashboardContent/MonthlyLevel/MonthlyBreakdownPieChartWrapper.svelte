<!-- https://stackoverflow.com/questions/20966817/how-to-add-text-inside-the-doughnut-chart-using-chart-js -->
<script lang="ts">
  import MonthlyBreakdownPieChart from './MonthlyBreakdownPieChart.svelte';

  export let text;
  export let subtext;
  export let arcs;

  text = text ? text : '';
  subtext = subtext ? subtext : '';
</script>

<div class="relative">
  <MonthlyBreakdownPieChart {arcs} />
  <div
    class="absolute top-1/2 left-1/2 text-center"
    style="transform: translate(-50%, -50%);"
  >
    <div class="sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
      {text}
    </div>
    <div class="sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
      {subtext}
    </div>
  </div>
</div>
