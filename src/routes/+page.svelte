<script>
  import Typewriter from "svelte-typewriter";
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import { browser } from "$app/environment";
  import LandingSection from "$lib/components/LandingSection.svelte";
  import { HEADING_CLASSES, SUBHEADING_CLASSES } from "$lib/constants";
  import { fade } from "svelte/transition";
  import Button from "$lib/components/Buttons/Button.svelte";

  let scrollY;
  let firstTypewriterIsDone;
  let secondTypewriterIsDone;

  let ySpring = spring(0, {
    stiffness: 0.05,
    damping: 0.8
  });

  let height, width;

  ySpring.subscribe((y) => {
    if (browser) {
      window.scrollTo(0, y);
    }
  });

  function onDownClick() {
    const sections = document.querySelectorAll("section");
    const secondSection = sections[1];
    ySpring.set(secondSection.offsetTop);
  }

  let mounted = false;
  onMount(() => {
    mounted = true;
    return () => {
      mounted = false;
    };
  });
</script>

<svelte:window bind:scrollY bind:innerHeight={height} bind:innerWidth={width} />

<LandingSection class="justify-center font-monospace">
  <div
    class="lg:min-w-md relative m-auto flex  w-full max-w-sm flex-col justify-between bg-darkest-gray text-left font-thin md:max-w-lg "
  >
    <div
      id="framebar"
      class="absolute -top-10 left-0 h-10 w-full rounded-tr-lg rounded-tl-lg bg-dark-gray"
    >
      <span class="cursor-none rounded-full px-2 py-1 text-gray">x</span>
    </div>
    <div class="flex min-h-[200px] w-full flex-col justify-between p-5">
      {#if mounted}
        <p class="text-3xl">
          <Typewriter on:done={() => (firstTypewriterIsDone = true)}>
            the future <!-- intentional line break for typewriter timing-->
            of <!-- intentional line break for typewriter timing-->
            engineering <!-- intentional line break for typewriter timing-->
            is <!-- intentional line break for typewriter timing-->
            human. <!-- intentional line break for typewriter timing-->
          </Typewriter>
        </p>

        <span class="mt-5 min-h-[1em] text-3xl font-thin">
          {#if firstTypewriterIsDone}
            <Typewriter delay={800} on:done={() => (secondTypewriterIsDone = true)}>
              hi. <!-- intentional line break for typewriter timing-->
              <!-- intentional line break for typewriter timing-->
              i'm <!-- intentional line break for typewriter timing-->
              diana.</Typewriter
            >
          {/if}
        </span>
      {/if}
    </div>
    <div class="flex justify-center">
      {#key secondTypewriterIsDone}
        <button
          on:click={onDownClick}
          in:fade
          class="z-10 my-3 w-fit rounded-full bg-darkest-gray p-5 text-white hover:border hover:border-gray hover:bg-darkest-gray"
        >
          <i class="las la-angle-down" aria-hidden="true" />
          <span class="sr-only">down</span>
        </button>
      {/key}
    </div>
  </div>
</LandingSection>
<LandingSection class="mx-auto mb-20 min-h-screen justify-around">
  <div class="align-center relative my-12 h-full p-2 lg:p-5">
    <h1 class="{HEADING_CLASSES} mb-4 text-center font-bold">Diana M. Steakley-Freeman</h1>
    <p class="{SUBHEADING_CLASSES} text-center font-thin">coder. creator. communicator.</p>
  </div>
  <div class="gap-4 px-16 md:flex">
    <img
      src="/images/diana-and-rafiki.jpg"
      class="mx-auto max-w-xs rounded-full border-2 border-white"
      alt=""
    />
    <div class="flex w-full flex-col justify-between p-5 md:w-1/2">
      <p class="m-auto my-3">
        Full Stack Software Engineer. 10+ years of website and application development in academic,
        medical, nonprofit, and start-up environments.
      </p>
      <p class="m-auto my-3">
        Digital Policy Buff, User Rights Enthusiast, Former Scientist, Forever Experimenting.
        Enthusiastic nerd.
      </p>
      <Button class="my-auto w-fit bg-darkest-gray p-5">More about Diana</Button>
    </div>
  </div>
</LandingSection>
