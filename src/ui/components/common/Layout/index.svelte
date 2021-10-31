<script>
  import viewport from "store/viewport";
  import Desktop from "./Desktop.svelte";
  import Mobile from "./Mobile.svelte";

  let layout;

  viewport.subscribe(({ mobile: m }) => {
    layout = m ? Mobile : Desktop;
  });
</script>

<svelte:component this={layout}>
  viewport width: {$viewport.x}, mobile: {$viewport.mobile}
  <slot />
</svelte:component>
