<script>
  import { fade } from "svelte/transition";
  import ArrowDown from "$lib/icons/arrowDown.svelte";
  import IntroStore from "$stores/IntroStore";
  import TrailedText from "../animations/TrailedText.svelte";
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";

  let windowHeight;
  let isShowing;

  // Y position of the Intro panel
  let top = spring(0);

  function slideOut() {
    top.update((v) => (v = windowHeight - 10));
  }
  function slideIn() {
    top.update((v) => (v = 0));
  }

  function onAnimationComplete() {
    IntroStore.setIsComplete(true);
  }
  function toggleIntro() {
    if (isShowing) {
      IntroStore.hideIntro();
      slideOut()
    } else {
      IntroStore.showIntro();
      slideIn();
    }
  }

  IntroStore.subscribe((store) => {
    isShowing = store.isShowing
  })
  onMount(() => {
    IntroStore.setWindowHeight(windowHeight);
  });
</script>

<svelte:window bind:innerHeight={windowHeight} />


<div
  class="bg-white w-screen h-screen p-16 flex flex-col m-auto text-black absolute"
  style="transform: translateY(-{$top}px);"
>
  <div class="my-auto py-3" style:min-height="50vh">
    <h1 id="intro-text" class=" text-6xl text-black max-w-md">
      <TrailedText onComplete={onAnimationComplete} />
    </h1>
  </div>

  <!-- Scroll Down -->
  {#if $IntroStore.isComplete}
    <div transition:fade class="flex justify-end absolute bottom-0 right-0 p-16 w-full">
      <button
        class="h-18 w-18 float-up-and-down"
        aria-disabled={!$IntroStore.isShowing}
        on:click={() => {
          IntroStore.hideIntro();
          slideOut();
        }}><ArrowDown /></button
      >
    </div>
  {/if}
</div>
<button
  class="relative w-full top-0 left-0 text-center bg-black z-50"
  on:click={toggleIntro}
>
  {isShowing ? "Hide" : "Show"} Intro
</button>
<style>
  .float-up-and-down {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 20px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
</style>
