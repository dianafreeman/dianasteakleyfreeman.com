<script>
  import SlidesStore from "$stores/SlidesStore";
  // import { fade, blur, fly, slide, scale } from "svelte/transition";

  export let slide;
  export let index;

  $: displayNumber = `0${index + 1}.`;
  $: isLongWord = slide.title.length > 8;
</script>

<div class="absolute w-full h-full flex m-auto" style="left: {index * 100}vw">
  <div class="inline-flex w-screen p-16" >
    <div
      class="flex flex-col md:flex-row flex-1 align-middle justify-center h-full"
    >
      <div class="flex flex-col md:m-auto md:w-1/2" style="min-width: 50%;">
        <h1
          class="font-bold md:text-center {isLongWord
            ? 'text-5xl lg:text-6xl'
            : 'text-6xl lg:text-7xl'}"
        >
          {slide.title}
        </h1>
      </div>
      <div class="flex flex-col md:m-auto md:w-1/2">
        <h2 class="font-manrope font-black text-5xl lg:text-6xl py-3">{displayNumber}</h2>
        <p class="font-manrope text-xl lg:text-2xl ">{slide.description}</p>
      </div>
    </div>
  </div>
</div>
