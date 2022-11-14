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

  function onDownClick() {
    ySpring.set($ySpring + height);
  }
  function onUpClick() {
    ySpring.set($ySpring - height);
  }

  const wordClasses =
    "rounded-sm mx-1 focus:outline focus:outline-white focus:outline-offset-8 focus:outline-1";
</script>

<svelte:window bind:scrollY bind:innerHeight={height} bind:innerWidth={width} />
<div class="fixed bottom-10 left-0 w-full text-center z-50">
  <button
    class="rounded-full p-5 w-fit mx-2 outline-neutral-600 outline outline-1 hover:bg-medium-gray"
    on:click={onUpClick}
  >
    <i class="text-4xl las la-long-arrow-alt-up" />
  </button>
  <button
    class="rounded-full p-5 w-fit mx-2 outline-neutral-600 outline outline-1 hover:bg-medium-gray"
    on:click={onDownClick}
  >
    <i class="text-4xl las la-long-arrow-alt-down" />
  </button>
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
    <div class="relative md:flex flex-col items-center my-5 hidden">
      <div id="vertical-line" class="absolute w-0 h-[125%] -z-10 top-[-15%] border-r border-r-white mx-auto"/>
      <img class="rounded-full w-1/2 md:w-1/3 lg:w-1/4 my-5 border border-white" src="/images/diana-and-rafiki.jpg" alt=""/>
    </div>
    <div id="vertical-line" class="w-2 h-1/3 border-r-1"/>
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

