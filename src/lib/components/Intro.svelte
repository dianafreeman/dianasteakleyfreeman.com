<script>
  import IntroStore from "$stores/IntroStore";
  import TrailedText from "../animations/TrailedText.svelte";
  import TrailStore from "$stores/TrailStore";
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import ArrowDown from "$lib/icons/arrowDown.svelte";
  import FloatingButton from "$lib/animations/FloatingButton.svelte";
  

  let playing = true;

  onMount(() => {
    TrailStore.play(() => IntroStore.setIsComplete(true));
  });

  function toggleIntro() {
    if ($IntroStore.isShowing) {
      IntroStore.hideIntro();
    } else {
      IntroStore.showIntro();
    }
  }
</script>

{#if $IntroStore.isShowing}
  <div
    transition:fly={{ y: -400 }}
    class="bg-white w-screen h-screen flex flex-col m-auto text-black absolute top-0 z-50"
  >
    <div class="my-auto py-3 px-6" style:min-height="50vh">
      <h1 id="intro-text" class="text-4xl lg:text-5xl xl:text-7xl font-thin max-w-md">
        <TrailedText />
      </h1>
    </div>
    <div class="flex justify-between">
      <div class="flex text-black" style:color="#989898">
        <!-- IntroSkip Button -->
        <div transition:fade class="flex justify-center">
          <button
            class="mx-2 "
            on:click={() => {
              playing = !playing;
              TrailStore.pauseOrResume();
            }}
          >
            {#if playing}
              PAUSE
            {:else}
              PLAY
            {/if}
          </button>
        </div>
        <div transition:fade class="flex justify-center">
          <button
            class="mx-2 "
            on:click={() => {
              TrailStore.skip();
              IntroStore.setIsComplete(true);
            }}
          >
            SKIP
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
{/if}
<button class="absolute w-screen top-0 left-0 text-center bg-black z-50" on:click={toggleIntro}>
  {$IntroStore.isShowing ? "Hide" : "Show"} Intro
</button>
