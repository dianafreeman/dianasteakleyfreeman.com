<script>
  import SlidesStore from "$stores/SlidesStore";
  import { spring } from "svelte/motion";
  import ContentSlide from "./ContentSlide.svelte";
  import LandingSlide from "./LandingSlide.svelte";

  export let slides;
  export let type;

  const TYPES = {
    LANDING: LandingSlide,
    CONTENT: ContentSlide
  };
  let left = spring(0);

  SlidesStore.subscribe((data) => {
    left.set(data.activeIndex * 100);
  });
</script>

<div id="slideshow-outer" class="w-screen overflow-hidden relative flex items-end h-screen">
  <div
    id="slideshow-inner"
    style="height:100%; width: calc(100vw * {slides.length}); left: -{$left}vw; top: 0; "
    class="absolute"
  >
    {#each slides as slide, i}
      <svelte:component this={TYPES[type]} {slide} index={i} />
    {/each}
  </div>
</div>
