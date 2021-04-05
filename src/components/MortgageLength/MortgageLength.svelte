<script lang="ts">
  import ButtonGroup from '../ButtonGroup';
  import TextField from '../TextField';
</script>

<div class="mortgage-length">
  <div class="mb-2">Mortgage Length</div>
  <div class="flex">
    <div class="mr-4">
      <TextField />
    </div>

    <ButtonGroup content={[30, 20, 15, 10]} />
  </div>
</div>
