<script lang="ts">
  export let color: string;

  color = color ? color : 'rgb(0, 0, 0)';
</script>

<div class="w-5 h-5" style={`background-color: ${color};`} />
