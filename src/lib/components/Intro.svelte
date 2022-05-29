<script>
  import { fade } from "svelte/transition";
  import ArrowDown from "$lib/icons/arrowDown.svelte";
  import IntroStore from "$stores/IntroStore";
  import TrailedText from "../animations/TrailedText.svelte";
  import TrailStore from "$stores/TrailStore";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  export let toggleIntro;

  onMount(() => {
    TrailStore.play(() => IntroStore.setIsComplete(true));
  });
</script>

{#if $IntroStore.isShowing}
  <div
    transition:fly={{ y: -400 }}
    class="bg-white w-screen h-screen p-16 flex flex-col m-auto text-black absolute"
  >
    <div class="my-auto py-3" style:min-height="50vh">
      <h1 id="intro-text" class="text-6xl text-black max-w-md">
        <TrailedText />
      </h1>
    </div>

    <!-- Scroll Down -->
    {#if $IntroStore.isComplete}
      <div transition:fade class="flex justify-end absolute bottom-0 right-0 p-16 w-full">
        <button
          class="h-18 w-18 float-up-and-down"
          aria-disabled={!$IntroStore.isShowing}
          on:click={toggleIntro}><ArrowDown /></button
        >
      </div>
    {/if}
  </div>
{/if}

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
