<script>
  import { afterUpdate, onMount, tick } from "svelte";
  import Trail from "./Trail/Trail.svelte";

  export let onComplete;
  import TrailStore from "$stores/TrailStore";

  const { play } = TrailStore;

  onMount(() => play(onComplete));
</script>

<span class="sr-only">The future of engineering is human. Hi, I'm Diana.</span>
<Trail items={$TrailStore} />
