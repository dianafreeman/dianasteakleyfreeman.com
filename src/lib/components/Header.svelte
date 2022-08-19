<script>
  import NavBar from "$lib/components/Nav/NavBar.svelte";
  import { fade } from "svelte/transition";
  import IntroStore from "$stores/IntroStore";

  let yPos;
</script>

<svelte:window bind:scrollY={yPos} />


