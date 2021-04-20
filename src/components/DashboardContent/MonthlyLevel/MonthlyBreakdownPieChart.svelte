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

  let ctx = null;
  let chart = null;
  const title = 'Monthly Payment Breakdown';
  let chartOptions = {};
  let data = {
    labels: ['Principle & Interest', 'Home Insurance', 'Property Tax', 'HOA'],
    datasets: [
      {
        label: 'Monthly Payment Breakdown',
        data: [1400, 500, 200, 300],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(255, 105, 86)'
        ],
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
            display: true,
            text: title
          },
          legend: {
            display: true
          }
        }
      }
    });
  });
  afterUpdate(() => {});
  onDestroy(() => {});
</script>

<canvas id="myChart" />
