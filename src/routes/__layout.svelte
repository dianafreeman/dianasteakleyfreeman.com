<script>
  import { spring } from "svelte/motion";

  import Header from "$lib/components/Header.svelte";
  import "normalize.css";
  import SlidesStore from "$stores/SlidesStore";
  import "../app.css";

  let activeSlide = "black";
  SlidesStore.subscribe((data) => {
    activeSlide = data.slides[data.activeIndex];
  });
</script>

<main class="bg-black min-h-screen" style="background-color: {activeSlide.color};">
  <Header />
  <slot />
  <footer class="h-16 flex flex-row justify-center m-auto" style="background-color: {activeSlide.color};">
    <p class="p-4">Copyright 2022 | Diana M Steakley-Freeman</p>
  </footer>
</main>

<style>
  main {
    transition: background-color 0.5s;
  }
</style>
