<script>
  import TrailedText from "$lib/components/TrailedText.svelte";
  import TrailStore from "$lib/components/Trail/store";
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import { browser } from "$app/environment";
  import LandingSection from "$lib/components/LandingSection.svelte";
  import { HEADING_CLASSES, SUBHEADING_CLASSES } from "$lib/constants";

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
</script>

<svelte:window bind:scrollY bind:innerHeight={height} bind:innerWidth={width} />

<LandingSection class="justify-center">
  <div class="align-center relative my-12 md:max-w-xl lg:max-w-3xl lg:p-5">
    <h1
      class="{HEADING_CLASSES} min-h-[3em] w-full text-left font-thin"
      aria-label="the future of engineering is human."
    >
      <TrailedText />
    </h1>
  </div>
</LandingSection>
<LandingSection class="mx-auto justify-around">
  <div class="align-center relative my-12 h-full p-2 lg:p-5">
    <p class="{HEADING_CLASSES} mb-4 text-center font-thin">
      i'm <span class="font-bold">diana.</span>
    </p>
    <p class="{SUBHEADING_CLASSES} text-center font-thin">
      <a href="/gallery/code" class="w-inherit">coder.</a><a href="/gallery">creator.</a><a
        href="/blog">commnuicator.</a
      >
    </p>
  </div>
  <img
    src="/images/diana-and-rafiki.jpg"
    class="mx-auto max-w-xs rounded-full border-2 border-white"
    alt="Diana and her dog "
  />

  <div class="align-center relative my-12 p-2 text-right text-lg md:text-xl lg:text-2xl lg:p-5">
    {#each "Full Stack Software Engineer / Digital Policy Buff, User Advocate / Former Scientist, Forever Experimenting".split("/") as phrase}
      <p class="font-thin">{phrase}</p>
    {/each}
  </div>
</LandingSection>
