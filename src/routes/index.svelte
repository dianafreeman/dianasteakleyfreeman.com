<script context="module">
  export const prerender = true;
</script>

<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";

  import Slideshow from "$lib/components/Slideshow/Slideshow.svelte";
  import SlidesStore from "$stores/SlidesStore";
  import SlideNav from "$lib/components/Slideshow/SlideNav.svelte";

  let landing, content;

  SlidesStore.subscribe((data) => {
    landing = data.landingSlides;
    content = data.contentSlides;
  });
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="relative">
  <Slideshow type="LANDING" slides={$SlidesStore.landingSlides} />
  <div class="absolute bottom-0 p-6">
    <SlideNav />
  </div>
</div>
<Slideshow type="CONTENT" slides={$SlidesStore.contentSlides} />
