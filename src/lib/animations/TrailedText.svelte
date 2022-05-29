<script>
  import { afterUpdate, onMount, tick } from "svelte";
  import Trail from "./Trail/Trail.svelte";

  import TrailStore from "$stores/TrailStore";

</script>

<span class="sr-only">The future of engineering is human. Hi, I'm Diana.</span>
<Trail items={$TrailStore} />
