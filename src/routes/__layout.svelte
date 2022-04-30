<script>
  import Header from "$lib/components/Header.svelte";
  import "normalize.css";
  import SlidesStore from "$stores/SlidesStore";
  import "../app.css";

  let activeColor = "black";
  SlidesStore.subscribe((data) => {
    activeColor = data.slides[data.activeIndex].color;
  });
</script>

<main
  class="bg-black h-screen w-screen relative font-poppins"
  style="background-color: {activeColor};"
>
  <Header />

  <slot />
</main>
