<script lang="ts">
  import ParseHelper from '../../../utils/parse-helper';
  import dayjs from 'dayjs';

  export let loan;
  export let startMonth;
  export let startYear;

  startMonth = startMonth ? startMonth : dayjs().month();
  startYear = startYear ? startYear : dayjs().year();

  let startDate = dayjs().year(startYear).month(startMonth).add(0, 'month');

  function dateForRow(i, startMonth, startYear) {
    return startDate.add(i, 'month').format('MMM D, YYYY');
  }
</script>

<div class="h-96 overflow-auto">
  <table class="table-auto w-full">
    <thead>
      <tr>
        <th class="px-4 py-2">Date</th>
        <th class="px-4 py-2">Monthly Payment</th>
        <th class="px-4 py-2">Principle</th>
        <th class="px-4 py-2">Interest</th>
        <th class="px-4 py-2">Principle Remaining</th>
      </tr>
    </thead>
    <tbody>
      {#if loan}
        {#each loan.payments as payment, i}
          <tr data-id={payment.id}>
            <td class="border px-4 py-2"
              >{dateForRow(i, startMonth, startYear)}</td
            >
            <td class="border px-4 py-2"
              >$ {ParseHelper.formatCurrency(payment.totalPayment)}</td
            >
            <td class="border px-4 py-2"
              >$ {ParseHelper.formatCurrency(payment.principlePayment)}</td
            >
            <td class="border px-4 py-2"
              >$ {ParseHelper.formatCurrency(payment.interestPayment)}</td
            >
            <td class="border px-4 py-2"
              >$ {ParseHelper.formatCurrency(payment.principleRemaining)}</td
            >
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>
