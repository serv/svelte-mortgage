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

  export let arcs: MonthlyArc[];

  arcs = arcs ? arcs : [];

  let datasetData = arcs.map((a) => a.amount);
  let labels = arcs.map((a) => a.displayName);
  let colors = arcs.map((a) => a.color);

  let ctx = null;
  let chart = null;
  const title = 'Monthly Payment Breakdown';
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

  onMount(() => {
    Chart.register(ArcElement, Legend, Title, Tooltip, DoughnutController);

    ctx = document.getElementById('myChart');
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
  });
  afterUpdate(() => {});
  onDestroy(() => {});
</script>

<canvas id="myChart" />
