<script>
  import TransitionText from "../animations/TrailedText.svelte";
  import Trail from "../animations/Trail/Trail.svelte";
  import words from "../animations/Trail/TrailWords.json";
  import { fade } from "svelte/transition";
  import ArrowDown from "$lib/icons/arrowDown.svelte";
  import IntroStore from "$stores/IntroStore";

  export let top;
  let windowHeight;

  function slideUp() {
    top.update((v) => (v = windowHeight - 10));
  }

  function onAnimationComplete() {
    setTimeout(() => {
      IntroStore.setIsComplete(true);
    }, 500);
  }
  function toggleShowing() {
    IntroStore.toggleIsShowing(slideUp);
  }
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div
  class="bg-white w-screen h-screen p-16 flex flex-col m-auto text-black absolute"
  style="top: -{$top}px;"
>
  <div class="my-auto py-3" style:min-height="50vh">
    <h1 id="intro-text" class=" text-6xl text-black max-w-md">
      <span class="sr-only">The future of engineering is human. Hi, I'm Diana.</span>
      <Trail input={words} onComplete={onAnimationComplete} />
    </h1>
  </div>

  {#if $IntroStore.isComplete}
    <div transition:fade class="flex justify-end absolute bottom-0 right-0 p-16 w-full">
      <button
        class="h-18 w-18 float-up-and-down"
        aria-disabled={!$IntroStore.isShowing}
        on:click={toggleShowing}><ArrowDown /></button
      >
    </div>
  {/if}
</div>

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
