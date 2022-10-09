<script>
  import "../app.css";
  import NavBar from "$lib/components/Nav/NavBar.svelte";

  let scrollY
  export const prerender = true

</script>

<svelte:window bind:scrollY={scrollY} />

<header class="w-screen relative z-99"  style:top={`${scrollY}px`}>
  <NavBar />
</header>
<main class="relative">
  <slot />
</main>

