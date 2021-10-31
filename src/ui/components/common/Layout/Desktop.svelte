<div class="widget-2b-desktop-layout">
  <slot />
</div>

<style lang="scss">
  .widget-2b-desktop-layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "."
      ".";
  }
</style>
