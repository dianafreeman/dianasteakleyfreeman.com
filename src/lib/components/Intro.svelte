<script>
  import TransitionText from "../animations/TransitionText.svelte";
  import { fade } from "svelte/transition";
  import ArrowDown from "$lib/icons/arrowDown.svelte";
  import IntroStore from "$stores/IntroStore";

  const words = [
    {
      text: "The",
      class: "",
      delay: 100
    },
    {
      text: "future",
      class: "",
      delay: 100
    },
    {
      text: "of",
      class: "",
      delay: 1000
    },
    { break: true },
    {
      text: "engineering",
      class: "",
      delay: 300
    },
    { break: true },
    {
      text: "is",
      class: "",
      delay: 900
    },
    {
      text: "human.",
      class: "font-bold",
      delay: 900
    },
    { break: true, delay: 0 },
    { break: true, delay: 0 },
    { break: true, delay: 0 },
    {
      text: "Hi.",
      class: "font-bold",
      delay: 2000
    },
    {
      text: "I'm",
      class: "font-bold",
      delay: 1400
    },
    {
      text: "Diana.",
      class: "font-bold",
      delay: 400
    }
  ];

  let skip = false;

  export let top;
  let windowHeight;
  let isDone;
  let isShowing;

  function slideUp() {
    top.update((v) => (v = windowHeight - 10));
  }

  function onAnimationComplete() {
    setTimeout(() => {
      IntroStore.setIsComplete(true);
    }, 500);
  }
  function onDownClick() {
    IntroStore.toggleIsShowing(slideUp);
  }

  IntroStore.subscribe((store) => {
    isDone = store.isComplete;
    isShowing = store.isShowing;
  });
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div
  class="bg-white w-screen h-screen p-16 flex flex-col m-auto text-black absolute"
  style="top: -{$top}px;"
>
  <div class="my-auto py-3" style:min-height="50vh">
    <h1 id="intro-text" class=" text-6xl text-black max-w-md">
      <TransitionText onComplete={onAnimationComplete} {words} {skip} />
    </h1>
  </div>

  {#if isDone}
    <div transition:fade class="flex justify-end absolute bottom-0 right-0 p-16 w-full">
      <!-- <button class="h-18 w-18" on:click={() => doSkip()}>SKIP</button> -->
      <button class="h-18 w-18 float-up-and-down" aria-disabled={!isShowing} on:click={onDownClick}><ArrowDown /></button>
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
