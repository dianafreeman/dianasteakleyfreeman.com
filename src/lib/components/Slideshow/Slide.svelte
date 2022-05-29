<script>
  import SlidesStore from "$stores/SlidesStore";
  import { onMount } from "svelte";

  export let slide;
  export let index;

  let inlineSize;
  $: displayNumber = `0${index + 1}.`;
</script>

<div class="absolute w-full flex m-auto" style="left: {index * 100}vw; ">
  <div class="inline-flex w-screen py-16">
    <div class="flex flex-col flex-1 align-middle justify-center h-full px-16">
      <div bind:clientWidth={inlineSize} class="flex flex-col">
        <h1
          style="hyphens: auto; inline-size: {inlineSize}px;  overflow-wrap: break-word;"
          class="font-bold text-7xl lg:text-8xl xl:text-9xl"
        >
          {slide.title}
        </h1>
      </div>
      <div class="flex flex-col">
        <h2 class="text-transparent-60 font-manrope font-black text-5xl py-3">
          {displayNumber}
        </h2>
        <p class="font-manrope text-xl ">{slide.description}</p>
      </div>
    </div>
  </div>
  <div />
</div>
