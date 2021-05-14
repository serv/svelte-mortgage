<!-- https://stackoverflow.com/questions/20966817/how-to-add-text-inside-the-doughnut-chart-using-chart-js -->
<script lang="ts">
  import MonthlyBreakdownPieChart from './MonthlyBreakdownPieChart.svelte';
  import ParseHelper from '../../../utils/parse-helper';

  export let text;
  export let subtext;
  export let arcs;

  text = text ? ParseHelper.formatCurrency(text) : '';
  subtext = subtext ? subtext : '';
</script>

<div class="relative md:block hidden">
  <MonthlyBreakdownPieChart {arcs} />
  <div
    class="absolute top-1/2 left-1/2 text-center"
    style="transform: translate(-50%, -50%);"
  >
    <div class="text-3xl">
      $ {text}
    </div>
    <div class="text-sm">
      {subtext}
    </div>
  </div>
</div>
