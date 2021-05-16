<script lang="ts">
  import Dashboard from './components/Dashboard';
  import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
</script>

<GoogleAnalytics properties={['G-FDM18362XN']} />
<Dashboard />

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
