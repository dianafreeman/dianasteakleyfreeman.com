<script>
  import { afterUpdate, onMount, tick } from "svelte";
  import Trail from "./Trail/Trail.svelte";

  export let words;
  export let onComplete;
</script>

<span class="sr-only">The future of engineering is human. Hi, I'm Diana.</span>
<Trail input={words} {onComplete} />
