<script>
  import SlidesStore from "$stores/SlidesStore";
  import { spring } from "svelte/motion";

  export let nubmerOfSlides;
  export let sectionsPerSlide;


  let xPos = spring(0);

  SlidesStore.subscribe((data) => {
    xPos.set(data.activeIndex * 100);
  });

  let NAV_HEIGHT = 136; // TODO add this to a layout store.

</script>

<div
  id="slideshow-outer"
  class="w-full overflow-hidden relative flex items-end"
  style="height: calc({sectionsPerSlide * 100}vh)"
>
  <div
    id="slideshow-inner"
    class="absolute u"
    style:width="calc(100vw * {nubmerOfSlides})"
    style:transform="translateX(-{$xPos}vw)"
  >
    <slot />
  </div>
</div>

<style>
  #slideshow-inner {
    height: inherit;
  }
</style>
