<script>
  import IntroStore from "$stores/IntroStore";
  import TrailedText from "../animations/TrailedText.svelte";
  import TrailStore from "$stores/TrailStore";
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import ArrowDown from "$lib/icons/lineArrowDown.svelte";
  import FloatingButton from "$lib/animations/FloatingButton.svelte";

  let playing = true;

  onMount(() => {
    let onComplete = () => {
      console.log("complete");
      IntroStore.setIsComplete(true);
    }
    TrailStore.play(onComplete);
  });

  function toggleIntro() {
    if ($IntroStore.isShowing) {
      IntroStore.hideIntro();
    } else {
      IntroStore.showIntro();
    }
  }
</script>

<div
  transition:fly={{ y: -400 }}
  class="bg-white w-screen h-screen flex flex-col m-auto text-black absolute top-0 left-0 z-50"
>
  <div class="my-auto py-3 px-6" style:min-height="50vh">
    <!-- <h1 id="intro-text" class="text-4xl ld:text-5xl xl:text-6xl text-black max-w-md"> -->
    <h1 id="intro-text" class="text-4xl lg:text-5xl xl:text-7xl font-thin max-w-md">
      <TrailedText />
    </h1>
  </div>
  <div class="flex justify-between">
    <div class="flex text-black h-16 p-6">
      <!-- IntroSkip Button -->
      <div transition:fade class="flex justify-center">
        <button
          disabled={$IntroStore.isComplete}
          class="mx-2 font-thin font-poppins text-center w-12 disabled:line-through decoration-from-font"
          on:click={() => {
            playing = !playing;
            TrailStore.pauseOrResume();
          }}
        >
          {#if playing}
            pause
          {:else}
            play
          {/if}
        </button>
      </div>
      <div transition:fade class="flex justify-center">
        <button
          disabled={$IntroStore.isComplete}
          class="mx-2 font-thin font-poppins text-center w-12 disabled:line-through decoration-from-font"
          on:click={() => {
            TrailStore.skip();
            IntroStore.setIsComplete(true);
          }}
        >
          skip
          <!-- <FastForward /> -->
        </button>
      </div>
    </div>
    {#if $IntroStore.isComplete}
      <!-- NavToggle -->
      <div transition:fade>
        <FloatingButton enabled={$IntroStore.isShowing} onClick={toggleIntro}>
          <ArrowDown />
        </FloatingButton>
      </div>
    {/if}
  </div>
</div>
