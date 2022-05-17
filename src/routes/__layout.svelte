<script>
  import NavBar from "$lib/components/Nav/NavBar.svelte";
  import "normalize.css";
  import "../app.css";
  import Landing from "$lib/components/Landing.svelte";
  import IntroStore from "$stores/IntroStore";
  import { spring } from "svelte/motion";
  import SideNav from "$lib/components/Nav/SideNav.svelte";

  let top = spring(0);

  function resetTop() {
    top.update((v) => (v = 0));
  }
</script>

<header class="w-full flex fixed flex-row " style="z-index: 9999999">
  <Landing {top} />
  <NavBar />
  <SideNav background={$IntroStore.isShowing ? "black" : "white"} />
</header>
<main class="relative bg-black">
  <slot />
  <footer class="h-16 flex flex-row justify-center m-auto">
    <p class="p-4">Copyright 2022 | Diana M Steakley-Freeman</p>
  </footer>
</main>
