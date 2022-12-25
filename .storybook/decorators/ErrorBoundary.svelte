<script>
  import { Boundary } from '@crownframework/svelte-error-boundary';

  let error

  $: console.log(error)
</script>

<Boundary onError={(thing) => console.error(thing)}>
  <h1>Error</h1>
  <slot />
</Boundary>