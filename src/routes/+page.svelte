<script>
  import TrailedText from "$lib/components/TrailedText.svelte";
  import TrailStore from "$lib/components/Trail/store";
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import { browser } from "$app/environment";
  import LandingSection from "$lib/components/LandingSection.svelte";
  import {
    HEADING_CLASSES,
    RESPONSIVE_CONTAINER_CLASSES,
    SUBHEADING_CLASSES
  } from "$lib/constants";
  import Card from "$lib/components/Card.svelte";

  let scrollY;
  onMount(() => {
    TrailStore.play();
  });

  let ySpring = spring(0);

  let height, width;

  ySpring.subscribe((y) => {
    if (browser) {
      window.scrollTo(0, y);
    }
  });

  // const wordClasses =
  //   "rounded-sm mx-1 focus:outline focus:outline-white focus:outline-offset-8 focus:outline-1";
</script>

<svelte:window bind:scrollY bind:innerHeight={height} bind:innerWidth={width} />

<LandingSection class="justify-end">
  <div class="my-12 relative lg:p-5 align-center ">
    <h1
      class="{HEADING_CLASSES} font-thin min-h-[3em] w-full text-left"
      aria-label="the future of engineering is human."
    >
      <TrailedText />
    </h1>
  </div>
</LandingSection>
<LandingSection class="mx-auto justify-center">
  <div class="my-12 relative p-2 lg:p-5 align-center">
    <p class="{HEADING_CLASSES} text-left font-thin mb-4">
      <!-- <p class="text-8xl md:text-8xl text-left font-thin mb-4"> -->
      i'm <span class="font-bold">diana.</span>
    </p>
    <p class="{SUBHEADING_CLASSES} text-left font-thin">
      <a href="/gallery/code" class="w-inherit">coder.</a><a href="/gallery">creator.</a><a
        href="/blog">commnuicator.</a
      >
    </p>
  </div>
</LandingSection>
