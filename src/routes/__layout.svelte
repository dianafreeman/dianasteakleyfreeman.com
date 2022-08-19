<script>
  import "../app.css";
  import NavBar from "$lib/components/Nav/NavBar.svelte";
</script>

<header class="w-screen bg-black">
  <NavBar />
</header>
<main class="relative bg-black">
  <slot />
</main>
