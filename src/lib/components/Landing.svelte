<script>
  import SlidesStore from "$stores/SlidesStore";
import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import LandingSlide from "./LandingSlide.svelte";

  let slides, activeIndex;

  let left = spring(0);
  let height 
  
  let offset;
  SlidesStore.subscribe((data) => {
    slides = data.slides;
    activeIndex = data.activeIndex;
    left.set(data.activeIndex * 100);
  });

</script>

<div class="w-screen overflow-hidden relative" style="height: 85vh">
  <div class="absolute" style="height: inherit; width: calc(100vw * {slides.length}); left: -{$left}vw;">
    {#each slides as slide, i}
      <LandingSlide {slide} index={i} />
    {/each}
  </div>
  <div class="absolute bottom-0 flex flex-row justify-between align-middle w-full px-4">
    <button class="p-4 m-2" on:click={SlidesStore.previous}>PREV</button>
    <button class="p-4 m-2" on:click={SlidesStore.next}>NEXT</button>
  </div>
</div>
