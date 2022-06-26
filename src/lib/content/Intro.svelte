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
      IntroStore.set(true);
    };
    TrailStore.play(onComplete);
  });
</script>

<div class="">
  <div class="flex text-black p-6 ">
    {#if !$IntroStore}
      <div transition:fade class="flex justify-center">
        <button
          disabled={$IntroStore}
          class="text-white mx-2 font-thin font-poppins text-center w-12 disabled:line-through decoration-from-font"
          on:click={() => {
            TrailStore.skip();
            IntroStore.set(true);
          }}
        >
          skip
        </button>
      </div>
    {/if}
  </div>
</div>
<div class="my-auto py-3 px-6" style:min-height="50vh">
  <!-- <h1 id="intro-text" class="text-4xl ld:text-5xl xl:text-6xl text-black max-w-md"> -->
  <h1 id="intro-text" class="text-4xl lg:text-5xl xl:text-7xl font-thin max-w-md">
    <TrailedText />
  </h1>
</div>
<div class="flex justify-between mb-10">
  <!-- 
      // NAV TOGGLE
      {#if $IntroStore.isComplete}
      
      <div transition:fade>
        <FloatingButton enabled={$IntroStore.isShowing} onClick={toggleIntro}>
          <ArrowDown />
        </FloatingButton>
      </div>
    {/if} -->
</div>
