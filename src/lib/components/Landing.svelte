<script>
  import SlidesStore from "$stores/SlidesStore";
  import { fade, blur, fly, slide, scale } from "svelte/transition";


  let slides, activeIndex;


  $: activeSlide = slides[activeIndex];

  SlidesStore.subscribe((data) => {
    slides = data.slides;
    activeIndex = data.activeIndex;

  });
  $: displayNumber = `0${activeIndex + 1}.`;
  $: isLongWord = activeSlide.title.length > 8;
</script>

{#key activeIndex}
  <div transition:fly={{ x: 600 }}>
    <div
      class="flex flex-col md:flex-row flex-1 align-middle justify-center px-5"
      style="min-height: 70vh;"
    >
      <div class="flex my-auto flex-col p-5 md:m-auto md:w-1/2" style="min-width: 50%;">
        <h1
          class="font-bold md:text-center {isLongWord
            ? 'text-5xl lg:text-6xl'
            : 'text-6xl lg:text-7xl'}"
        >
          {activeSlide.title}
        </h1>
      </div>
      <div class="flex my-auto flex-col p-5 md:m-auto md:w-1/2">
        <h2 class="font-manrope font-black text-5xl lg:text-6xl py-3">{displayNumber}</h2>
        <p class="font-manrope text-xl lg:text-2xl ">{activeSlide.description}</p>
      </div>
    </div>
    <div class="flex flex-row justify-between align-middle w-full px-4">
      <button class="p-4 m-2" on:click={SlidesStore.previous}>PREV</button>
      <button class="p-4 m-2" on:click={SlidesStore.next}>NEXT</button>
    </div>
  </div>
{/key}
