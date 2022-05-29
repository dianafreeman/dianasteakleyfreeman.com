<script>
  import IntroStore from "$stores/IntroStore";
  import TrailedText from "../animations/TrailedText.svelte";
  import TrailStore from "$stores/TrailStore";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  onMount(() => {
    TrailStore.play(() => IntroStore.setIsComplete(true));
  });
</script>

{#if $IntroStore.isShowing}
  <div
    transition:fly={{ y: -400 }}
    class="bg-white w-screen h-screen flex flex-col m-auto text-black absolute"
  >
    <div class="my-auto py-3 px-6" style:min-height="50vh">
      <!-- <h1 id="intro-text" class="text-4xl ld:text-5xl xl:text-6xl text-black max-w-md"> -->
      <h1 id="intro-text" class="text-4xl lg:text-5xl xl:text-7xl font-thin max-w-md">
        <TrailedText />
      </h1>
    </div>

    <!-- SHOUD ONLY BE USED FOR CONTROLS -->
    <slot name="intro-controls"/>
  </div>
{/if}
