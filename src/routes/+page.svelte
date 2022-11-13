<script>
  import TrailedText from "$lib/components/TrailedText.svelte";
  import TrailStore from "$lib/components/Trail/store";
  import { onMount } from "svelte";
  import Button from "$lib/components/Button.svelte";
  import { spring } from "svelte/motion";
  import { browser } from "$app/environment";

  let scrollTargetContainer, scrollY;
  onMount(() => {
    TrailStore.play();
  });

  function createScrollTargets() {
    const scrollTargets = Array.from(scrollTargetContainer.querySelectorAll("[data-scrolltarget]"));
    
    const positions = [0, ...scrollTargets.map((e) => e.offsetTop + e.clientHeight)];

    // get the position that is closest to the current value of scrollY
    const current = positions.reduce((prev, curr) =>
      Math.abs(curr - (scrollY + height)) < Math.abs(prev - (scrollY + height)) ? curr : prev
    );

    const first = positions[0];
    const last = positions[positions.length - 1];

    const previousPositions = positions.filter((p) => p <= scrollY);
    const previous = previousPositions[previousPositions.length - 1];

    const nextPositions = positions.filter((p) => p > scrollY);
    const next = nextPositions[0];

    return {
      current,
      first,
      last,
      next,
      previous
    };
  }

  let ySpring = spring(0);

  let height, width;



ySpring.subscribe((y) => {
  if (browser) {
    window.scrollTo(0, y);
  }
});
  function onArrowClick(type) {
    // window.scrollTo(0, window.clientHeight)
    // // TODO: make this stateful
    const { first, last, current, next } = createScrollTargets();

    if (type === "down") {
      if (!next || current === last) return ySpring.set(first);
      return ySpring.set(next);
    }
  }

  function onDownClick() {
    onArrowClick("down");
  }

</script>
<svelte:window bind:scrollY bind:innerHeight={height} bind:innerWidth={width} />

<div bind:this={scrollTargetContainer}>
<div data-scrolltarget class="relative flex flex-col min-h-[90vh] justify-center mx-auto">
  <div class="my-12 relative p-2 lg:p-5 align-center pt-[4vh]">
    <h1
      class="text-5xl md:text-6xl lg:text-7xl font-thin min-h-[5em]"
      aria-label="the future of engineering is human."
    >
      <TrailedText />
    </h1>
    <div
    class="fixed bottom-10 inline-flex justify-end w-full z-50 max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
  >
    <Button
      class="p-5 w-fit bg-semi-transparent mx-2 outline-neutral-600 outline outline-1"
      on:click={onDownClick}
    >
      <i class="text-4xl las la-long-arrow-alt-down" />
    </Button>
  </div>
  </div>

</div>
<div data-scrolltarget class="flex flex-col min-h-screen justify-center mx-auto ">
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
    </div>
  </div>
</div>
<!-- <div data-scrolltarget class="flex flex-col min-h-screen justify-center mx-auto ">
<h2>About</h2>
</div> -->

</div>