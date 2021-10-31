<script>
  import { _ } from "svelte-i18n";
  import Page from "ui/components/common/Page/index.svelte";
</script>

<Page>
  <div>{$_("heading")}</div>
</Page>

<style lang="scss">
  div {
    @apply text-red-500;
  }
</style>
