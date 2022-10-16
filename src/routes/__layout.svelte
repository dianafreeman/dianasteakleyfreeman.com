<script>
  import "../app.css";
  import NavBar from "$lib/components/Nav/NavBar.svelte";
  import { browser } from "$app/env";
  import LayoutStore from "$stores/LayoutStore";

  let scrollY;
  export const prerender = true;

  const { setScrollY, setNavHeight } = LayoutStore;

  $: if (browser && scrollY) {
    setScrollY(scrollY);
  }
</script>

<svelte:window bind:scrollY />

<header class="w-screen relative z-99" style:top={`${$LayoutStore.scrollY}px`}>
  <NavBar />
</header>
<main class="relative">
  <slot />
</main>
