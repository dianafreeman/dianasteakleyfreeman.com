<script>
  import "../app.css";
  import NavBar from "$lib/components/Nav/NavBar.svelte";
  import LayoutStore from "$stores/LayoutStore";

  let scrollY;
  /** @type {import('./$types').LayoutData} */
  export let data;
  const { categories } = data;

</script>

<svelte:window bind:scrollY />

<header class="w-screen relative" class:dyslexia={$LayoutStore.dyslexia}>
  <NavBar {categories} />
</header>
<main class="relative" class:dyslexia={$LayoutStore.dyslexia}>
  <slot />
</main>
