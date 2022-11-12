<script>
  import TrailedText from "$lib/components/TrailedText.svelte";
  import TrailStore from "$lib/components/Trail/store";
  import { onMount } from "svelte";
  import Button from "$lib/components/Button.svelte";
  import { spring } from "svelte/motion";
  import { browser } from "$app/environment";

  let height;

  let ySpring = spring(0);

  onMount(() => {
    TrailStore.play();
  });

  function onDownClick() {
    ySpring.update((v) => v + height);
  }

  ySpring.subscribe((y) => {
    if (browser) {
      window.scrollTo(0, y);
    }
  });
</script>

<svelte:window bind:innerHeight={height}/>

<div class="relative flex flex-col min-h-[90vh] justify-center mx-auto">
  <div class="my-12 relative p-2 lg:p-5 align-center pt-[4vh]">
    <h1
      class="text-5xl md:text-6xl lg:text-7xl font-thin min-h-[3em]"
      aria-label="the future of engineering is human."
    >
      <TrailedText />
    </h1>
  </div>
  <div class="fixed bottom-10 right-10 p-10">
    <Button class="p-5" onClick={() => onDownClick()}>down</Button>
  </div>
</div>
<div class="flex flex-col min-h-screen justify-center mx-auto">
  <div class="my-12 relative p-2 lg:p-5 align-center">
    <h1 class="text-6xl text-left font-bold">I'm Diana.</h1>
  </div>

  <div class="p-2 lg:p-5 my-5">
    <p class="mr-3 text-xl font-thin text-left">
      Software Engineer, Digital Policy Buff, User Rights Enthusiast, Former Scientist, Forever
      Experimenting.
    </p>

    <hr class="my-10" />

    <div class="text-md flex justify-evenly w-full ">
      <div class="text-left">
        <h2 class="font-bold text-xl">Exciting Updates Ahead!</h2>
        <p class="text-italic text-neutral-300">There is more to this site coming soon.</p>
      </div>
      <!-- {#each categories as category}
        <Button href="/{category}">{category}</Button>
      {/each} -->
    </div>
  </div>
</div>
