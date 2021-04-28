<script lang="ts">
  import PaymentItem from '../MonthlyLevel/PaymentItem.svelte';

  export let loan;
</script>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Principle</th>
      <th>Interest</th>
      <th>Monthly Payment</th>
      <th>Principle Remaining</th>
      <th>Cumulative Interest</th>
    </tr>
  </thead>
  <tbody>
    {#if loan}
      {#each loan.payments as payment, i}
        <tr>
          <td>{payment.id}</td>
          <td>{payment.principlePayment}</td>
          <td>{payment.interestPayment}</td>
          <td>{payment.totalPayment}</td>
          <td>{payment.principleRemaining}</td>
          <td>{payment.interestCumulative}</td>
        </tr>
      {/each}
    {/if}
  </tbody>
</table>
