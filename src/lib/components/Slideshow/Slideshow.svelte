<script>
  import SlidesStore from "$stores/SlidesStore";
  import { spring } from "svelte/motion";
  import Slide from "./Slide.svelte";
  import SlideNav from "$lib/components/Slideshow/SlideNav.svelte";

  export let slides;

  let left = spring(0);

  SlidesStore.subscribe((data) => {
    left.set(data.activeIndex * 100);
  });
</script>

<div id="slideshow-outer" class="w-screen overflow-hidden relative flex items-end" style="height: calc(100vh - 136px)">
  <div class="absolute bottom-10 p-10">
    <SlideNav />
  </div>
  <div
    id="slideshow-inner"
    style="width: calc(100vw * {slides.length}); transform: translateX(-{$left}vw); top: 0; "
    class="absolute"
  >
    {#each slides as slide, i}
      <Slide {slide} index={i} />
    {/each}
  </div>


</div>
