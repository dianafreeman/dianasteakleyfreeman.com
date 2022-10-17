<script>
  import "../app.css";
  import NavBar from "$lib/components/Nav/NavBar.svelte";
  import { browser } from "$app/env";
  import LayoutStore from "$stores/LayoutStore";

  let scrollY;
  export const prerender = true;

  const { setScrollY } = LayoutStore;

  $: if (browser && scrollY) {
    setScrollY(scrollY);
  }
</script>

<svelte:window bind:scrollY />

<header class="w-screen relative" class:dyslexia={$LayoutStore.dyslexia}>
  <NavBar />
</header>
<main class="relative" class:dyslexia={$LayoutStore.dyslexia}>
  <slot />
</main>
