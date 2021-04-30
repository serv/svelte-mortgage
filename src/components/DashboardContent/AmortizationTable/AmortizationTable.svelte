<script lang="ts">
  import ParseHelper from '../../../utils/parse-helper';

  export let loan;
</script>

<table class="table-auto">
  <thead>
    <tr>
      <th class="px-4 py-2">ID</th>
      <th class="px-4 py-2">Principle</th>
      <th class="px-4 py-2">Interest</th>
      <th class="px-4 py-2">Monthly Payment</th>
      <th class="px-4 py-2">Principle Remaining</th>
      <th class="px-4 py-2">Cumulative Interest</th>
    </tr>
  </thead>
  <tbody>
    {#if loan}
      {#each loan.payments as payment, i}
        <tr>
          <td class="border px-4 py-2">{payment.id}</td>
          <td class="border px-4 py-2"
            >$ {ParseHelper.formatCurrency(payment.principlePayment)}</td
          >
          <td class="border px-4 py-2"
            >$ {ParseHelper.formatCurrency(payment.interestPayment)}</td
          >
          <td class="border px-4 py-2"
            >$ {ParseHelper.formatCurrency(payment.totalPayment)}</td
          >
          <td class="border px-4 py-2"
            >$ {ParseHelper.formatCurrency(payment.principleRemaining)}</td
          >
          <td class="border px-4 py-2"
            >$ {ParseHelper.formatCurrency(payment.interestCumulative)}</td
          >
        </tr>
      {/each}
    {/if}
  </tbody>
</table>
