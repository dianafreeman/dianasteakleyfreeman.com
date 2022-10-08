<script>
  import "../app.css";
  import NavBar from "$lib/components/Nav/NavBar.svelte";

  export const prerender = true
</script>

<header class="w-screen">
  <NavBar />
</header>
<main class="relative bg-neutral-900">
  <slot />
</main>
