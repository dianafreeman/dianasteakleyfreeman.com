<script>
  import SlidesStore from "$stores/SlidesStore";
import { onMount } from "svelte";
  // import { fade, blur, fly, slide, scale } from "svelte/transition";

  export let slide;
  export let index;

  let inlineSize, titleContainer
  $: displayNumber = `0${index + 1}.`;
  $: isLongWord = slide.title.length > 8;
  onMount(() => {
    console.log(inlineSize)



  })
</script>

<div class="absolute w-full h-full flex m-auto" style="left: {index * 100}vw">
  <div class="inline-flex w-screen p-16">
    <div class="flex flex-col lg:flex-row flex-1 align-middle justify-center h-full">
      <div bind:clientWidth={inlineSize} class="flex flex-col lg:m-auto lg:w-1/2" >
        <h1
          style="hyphens: auto; inline-size: {inlineSize}px;  overflow-wrap: break-word;"
          class="font-bold lg:text-center  {isLongWord
            ? 'text-6xl md:text-7xl xl:text-7xl'
            : 'text-7xl md:text-8xl xl:text-9xl'}"
        >
          {slide.title}
        </h1>
      </div>
      <div class="flex flex-col lg:m-auto lg:w-1/2">
        <h2 class="text-transparent-60 font-manrope font-black text-5xl xl:text-6xl py-3">
          {displayNumber}
        </h2>
        <p class="font-manrope text-xl xl:text-2xl ">{slide.description}</p>
      </div>
    </div>
  </div>
</div>
