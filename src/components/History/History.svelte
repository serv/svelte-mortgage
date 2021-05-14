<script lang="ts">
  import { history, currentId } from '../../services/stores';
  import Button from '../Button';

  let baseClass = 'max-h-64 mb-4';

  function handleReset() {
    history.reset();
  }

  function onDelete(e) {
    const id = e.target.getAttribute('data-id');

    history.remove(id);
  }

  function onSelect(e) {
    const id = e.target.getAttribute('data-id');

    currentId.set(id);
  }
</script>

<div class="mb-10">
  <div class={baseClass}>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">Home Price</th>
          <th class="px-4 py-2 lg:table-cell hidden">Down Payment</th>
          <th class="px-4 py-2 lg:table-cell hidden">Interest Rate</th>
          <th class="px-4 py-2 lg:table-cell hidden">Mortgage Length</th>
          <th class="px-4 py-2">Delete</th>
        </tr>
      </thead>
      <tbody>
        {#each $history as row}
          <tr data-id={row.id}>
            <td class="border px-4 py-2">
              <div
                on:click={onSelect}
                data-id={row.id}
                class="cursor-pointer w-max text-blue-600 hover:underline"
              >
                $ {row.homePrice}
              </div>
            </td>
            <td class="border px-4 py-2 lg:table-cell hidden"
              >{row.downPayment}</td
            >
            <td class="border px-4 py-2 lg:table-cell hidden"
              >{row.interestRate}</td
            >
            <td class="border px-4 py-2 lg:table-cell hidden"
              >{row.mortgageLength}</td
            >
            <td class="border px-4 py-2">
              <div
                data-id={row.id}
                on:click={onDelete}
                class="w-max cursor-pointer"
              >
                ❌
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div class="flex justify-center">
    <Button handleClick={handleReset} content="🗑️ Reset" />
  </div>
</div>
