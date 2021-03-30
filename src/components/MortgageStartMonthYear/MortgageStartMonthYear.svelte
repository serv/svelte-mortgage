<script lang="ts">
  import MonthSelect from '../MonthSelect';
  import YearTextField from '../YearTextField';
  export let options;
</script>

<div>Starting Month and Year</div>
<div class="flex">
  <div class="mr-4">
    <MonthSelect />
  </div>

  <YearTextField />
</div>
