<script lang="ts">
  import { onMount, afterUpdate, onDestroy } from 'svelte';
  import {
    Chart,
    Legend,
    Title,
    Tooltip,
    ArcElement,
    DoughnutController
  } from 'chart.js';
  import type MonthlyArc from '../../../models/MonthlyArc';
  import ParseHelper from '../../../utils/parse-helper';

  export let arcs: MonthlyArc[];

  arcs = arcs ? arcs : [];

  let datasetData = convertAllToNumber(arcs.map((a) => a.amount));
  let labels = arcs.map((a) => a.displayName);
  let colors = arcs.map((a) => a.color);

  let ctx = null;
  let chart = null;
  const title = 'Monthly Payment Breakdown';

  onMount(() => {
    Chart.register(ArcElement, Legend, Title, Tooltip, DoughnutController);

    ctx = document.getElementById('myChart');
    chart = createChart(datasetData);
  });
  afterUpdate(() => {});
  onDestroy(() => {});

  function createChart(datasetData) {
    let data = {
      labels: labels,
      datasets: [
        {
          label: 'Monthly Payment Breakdown',
          data: datasetData,
          backgroundColor: colors,
          hoverOffset: 4
        }
      ]
    };

    chart = new Chart(ctx, {
      type: 'doughnut',
      data,
      options: {
        plugins: {
          title: {
            display: false,
            text: title
          },
          legend: {
            display: false
          }
        }
      }
    });

    return chart;
  }

  function convertAllToNumber(array: Array<any>): Array<number> {
    return array.map((el) => {
      if (typeof el === 'number') {
        return el;
      } else if (typeof el === 'string') {
        return ParseHelper.parseCurrency(el);
      }

      throw new Error('invalid type');
    });
  }

  $: {
    arcs = arcs;
    let datasetData = convertAllToNumber(arcs.map((a) => a.amount));

    if (chart && chart.data && chart.data.datasets) {
      chart.data.datasets[0].data = datasetData;
      chart.update();
    }
  }
</script>

<canvas id="myChart" />
