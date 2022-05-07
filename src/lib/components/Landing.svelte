<script>
  import SlidesStore from "$stores/SlidesStore";
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import LandingSlide from "./LandingSlide.svelte";

  let slides, activeIndex;

  let left = spring(0);
  let container;

  let containerTopOffset;
  let buttonWrapperHeight;

  SlidesStore.subscribe((data) => {
    slides = data.slides;
    activeIndex = data.activeIndex;
    left.set(data.activeIndex * 100);
  });

  onMount(() => {
    containerTopOffset = container.offsetTop;
    console.log(`calc(100vh - ${containerTopOffset} - ${buttonWrapperHeight})`);
    console.log("container", container.offsetTop);
  });
</script>

<div
  bind:this={container}
  class="w-screen overflow-hidden relative flex items-end"
  style="height: calc(100vh - {containerTopOffset}px);"
>
  <div
    id=""
    class="absolute"
    style="height: calc(100% - {buttonWrapperHeight}px); width: calc(100vw * {slides.length}); left: -{$left}vw; top: 0;"
  >
    {#each slides as slide, i}
      <LandingSlide {slide} index={i} />
    {/each}
  </div>
  <div bind:clientHeight={buttonWrapperHeight} class="flex flex-row justify-between w-full p-10">
    <button class="p-4 m-2" on:click={SlidesStore.previous}>PREV</button>
    <button class="p-4 m-2" on:click={SlidesStore.next}>NEXT</button>
  </div>
</div>
