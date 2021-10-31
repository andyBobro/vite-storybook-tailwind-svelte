<script>
  import { path, query, fragment, pattern, goto } from 'svelte-pathfinder';
  import { fade } from 'svelte/transition';
</script>

<div class="widget-2b-overlay" on:click|self="{() => goto('/')}" in:fade="{{ duration: 300 }}" out:fade="{{ duration: 200 }}">
  <slot />
</div>

<style lang="scss"> 
.widget-2b-overlay {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(black, .5);
}
</style>