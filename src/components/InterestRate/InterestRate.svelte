<script lang="ts">
  import TextField from '../TextField';
</script>

<div class="flex">
  <div class="mr-4">
    <TextField label="Interest Rate" />
  </div>

  <TextField label="APR" options={{ readOnly: true }} />
</div>
