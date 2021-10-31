<script>
  import { pattern, goto } from "svelte-pathfinder";
  import OverlayWrapper from "ui/components/common/OverlayWrapper/index.svelte";
  import Layout from "ui/components/common/Layout/index.svelte";
  import Window from "ui/components/common/Window/index.svelte";
  import Router from "ui/components/Router/index.svelte";
  import Empty from "ui/views/Empty.svelte";
  import viewport from "store/viewport";
  import "styles/globals/index.scss";
  import { EXAMPLE_ENV } from 'utils/constants';
</script>

<main class="main">
  {#if $pattern("/")}
    <!-- eg. /products/1 -->
    <Empty />
  {:else if $pattern("/app") || $pattern("/app/*")}
    <OverlayWrapper>
      <Window>
        <Layout>
          <nav class={$viewport.mobile && "mobile"}>
            <button on:click={() => goto("/app/payment")}>payment</button>

            <hr />

            <button on:click={() => goto("/app/login")}>login</button>

            <hr />

            <button on:click={() => goto("/app/shipping")}>shipping</button>

            <hr />

            <button on:click={() => goto("/")}>close</button>
          </nav>
          from .env:
          <code>
            <pre>
              EXAMPLE_ENV={EXAMPLE_ENV}
            </pre>
          </code>
          <div>
            <Router />
          </div>
        </Layout>
      </Window>
    </OverlayWrapper>
  {/if}
</main>

<style lang="scss">
  nav {
    display: flex;
    button {
      margin-right: 20px;
    }
    &.mobile {
      flex-direction: column;
      button {
        margin-right: 0;
      }
    }
  }
</style>
