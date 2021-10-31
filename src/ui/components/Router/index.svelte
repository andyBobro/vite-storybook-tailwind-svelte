<script>
  import { path, query, fragment, pattern, goto } from 'svelte-pathfinder';
  import Payment from 'ui/views/Payment.svelte'
  import Login from 'ui/views/Login.svelte'
  import Shipping from 'ui/views/Shipping.svelte'
</script>

<div>
  {#if $pattern('/app/payment') }
    <Payment></Payment>
  {:else if $pattern('/app/login')}
    <Login></Login>
  {:else if $pattern('/app/shipping')}
    <Shipping></Shipping>
  {/if}
</div>
