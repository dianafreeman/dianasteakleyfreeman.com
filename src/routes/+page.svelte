<script>
  import TrailedText from "$lib/components/TrailedText.svelte";
  import TrailStore from "$lib/components/Trail/store";
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import { browser } from "$app/environment";
  import LandingSection from "$lib/components/LandingSection.svelte";

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

  const wordClasses =
    "rounded-sm mx-1 focus:outline focus:outline-white focus:outline-offset-8 focus:outline-1";
</script>

<svelte:window bind:scrollY bind:innerHeight={height} bind:innerWidth={width} />

<div class="fixed right-0 z-10 w-fit">
  <!-- <p>page sections</p> -->
  <ol class="h-screen w-inherit flex flex-col justify-center">
    <li>
      <button
        class="rounded-full w-[20px] h-[20px] my-2 mx-4 border border-white {scrollY < height
          ? 'bg-black'
          : 'bg-white'}"
        on:click={() => window.scrollTo(0, 0)}
      />
    </li>
    <li>
      <button
        class="rounded-full w-[20px] h-[20px] my-2 mx-4 border border-white {scrollY > height &&
        scrollY < height * 2
          ? 'bg-black'
          : 'bg-white'}"
        on:click={() => window.scrollTo(0, height)}
      />
    </li>
  </ol>
</div>

<LandingSection>
  <div class="my-12 relative lg:p-5 align-center max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl ">
    <h1
      class="text-5xl md:text-7xl break-words lg:text-8xl font-thin min-h-[3em] w-full text-left"
      aria-label="the future of engineering is human."
    >
      <TrailedText />
    </h1>
  </div>
</LandingSection>
<LandingSection class="mx-auto">
  <div class="my-12 relative p-2 lg:p-5 align-center">
    <p class="text-8xl md:text-8xl text-center font-thin mb-4">
      i'm <span class="font-bold">diana.</span>
    </p>
    <p class="text-xl md:text-[2rem] text-center font-thin">
      <a href="/gallery/code" class="w-inherit {wordClasses}">coder.</a><a
        href="/gallery"
        class={wordClasses}>creator.</a
      ><a href="/blog" class={wordClasses}>commnuicator.</a>
    </p>
  </div>
</LandingSection>
