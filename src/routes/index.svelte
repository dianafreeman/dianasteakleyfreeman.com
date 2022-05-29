<script context="module">
  export const prerender = true;
</script>

<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";

  import Slideshow from "$lib/components/Slideshow/Slideshow.svelte";
  import SlidesStore from "$stores/SlidesStore";

  let landing, content;

  SlidesStore.subscribe((data) => {
    landing = data.slides;
    // content = data.contentSlides;
  });
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="relative">
  <Slideshow slides={$SlidesStore.slides} />
  <!-- <div class="absolute bottom-0 p-6"> -->
  <!-- </div> -->
</div>
<!-- <Slideshow type="CONTENT" slides={$SlidesStore.contentSlides} /> -->
