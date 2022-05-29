<script context="module">
  export async function load({ url, params }) {
    return {
      props: {
        url
      }
    };
  }
</script>

<script>
  import "normalize.css";
  import "../app.css";
  import Intro from "$stores/IntroStore";
  import { onMount } from "svelte";
  import Header from "$lib/components/Header.svelte";
  import SlideControls from "$lib/components/Slideshow/SlideNav.svelte";
  import IntroStore from "$stores/IntroStore";

  export let url;

  let windowHeight;
  let yPos;

  onMount(() => {
    if (url.pathname == "/") {
      // reset the intro on home page mount
      Intro.set({
        isShowing: true,
        isComplete: false
      });
    }
    Intro.setWindowHeight(windowHeight);
  });
  let NAV_HEIGHT = 136; // TODO add this to a layout store.

  let slideNavHeight;
</script>

<svelte:window bind:innerHeight={windowHeight} bind:scrollY={yPos} />
<Header {windowHeight} />
{#if !$IntroStore.isShowing}
  <div
    bind:clientHeight={slideNavHeight}
    style:top="calc(100vh - {slideNavHeight}px)"
    style:transform="translateY({yPos}px)"
    class="absolute w-full z-50 flex justify-center"
  >
    <SlideControls />
  </div>
{/if}
<main class="relative bg-black" class:bg-white={$IntroStore.isShowing}>
  <div id="spacer" class="bg-black" style="height: {NAV_HEIGHT}px;" />

  <slot />
</main>
