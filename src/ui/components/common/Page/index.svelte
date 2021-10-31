<script>
  import { fly } from 'svelte/transition';
</script>

<div class="border-2 p-16 border-gray-400" in:fly={{x:-100, delay: 300, duration: 200}} out:fly={{x: 100, delay: 0, duration: 100}}>
<slot></slot>
</div>
