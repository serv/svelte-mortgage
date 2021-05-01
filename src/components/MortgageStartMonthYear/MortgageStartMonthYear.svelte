<script lang="ts">
  import MonthSelect from '../MonthSelect';
  import YearTextField from '../YearTextField';
  export let options;
  export let defaultMonth;
  export let defaultYear;
</script>

<div class="flex">
  <div class="mr-4">
    <MonthSelect {defaultMonth} />
  </div>

  <div class="w-full">
    <YearTextField {defaultYear} />
  </div>
</div>
