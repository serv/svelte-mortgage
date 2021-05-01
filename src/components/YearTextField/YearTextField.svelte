<script lang="ts">
  import TextField from '../TextField';
  export let options;
  export let defaultYear;
</script>

<TextField
  label="Starting Year"
  valueType="year"
  options={{ value: defaultYear }}
/>
