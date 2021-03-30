<script lang="ts">
  import { select_options } from 'svelte/internal';
  import Select from '../Select';

  export let options;
  let months = [
    {
      value: 1,
      display: 'January'
    },
    {
      value: 2,
      display: 'February'
    },
    {
      value: 3,
      display: 'March'
    },
    {
      value: 4,
      display: 'April'
    },
    {
      value: 5,
      display: 'May'
    },
    {
      value: 6,
      display: 'June'
    },
    {
      value: 7,
      display: 'July'
    },
    {
      value: 8,
      display: 'August'
    },
    {
      value: 9,
      display: 'September'
    },
    {
      value: 10,
      display: 'October'
    },
    {
      value: 11,
      display: 'November'
    },
    {
      value: 12,
      display: 'December'
    }
  ];
</script>

<Select label="Month" selectOptions={months} />
