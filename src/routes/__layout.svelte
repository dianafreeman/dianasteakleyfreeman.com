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
  import "../app.css";
  import Intro from "$stores/IntroStore";
  import { onMount } from "svelte";
  import Header from "$lib/components/Header.svelte";
  import LayoutStore from "$stores/LayoutStore";
  import { spring } from "svelte/motion";

  import FlatButtonGroup from "$lib/components/ButtonGroup/FlatButtonGroup.svelte";

  export let url;

  const ONE_HUNDRED = 100; // TODO: convert to pixel measurements by window size?

  let windowHeight;

  onMount(() => {
    // if (url.pthname == "/") {
    //   // reset the intro on home page mount
      Intro.set({
        isShowing: true,
        isComplete: false
      });
    
    // Intro.setWindowHeight(windowHeight);
  });

  const { subscribe: subscribeToActiveCell } = LayoutStore;

  const translateY = spring(0);
  const translateX = spring(0);

  subscribeToActiveCell((cell) => {
    translateY.set(cell.y * ONE_HUNDRED); // uses relative vw/vh units for now
    translateX.set(cell.x * ONE_HUNDRED); // uses relative vw/vh units for now
  });
</script>

<!-- TODO: Add gesture support -->
<svelte:window bind:innerHeight={windowHeight} />
<Header {windowHeight} />

<main class="relative bg-black">
  <FlatButtonGroup />
  <div class="relative h-screen w-screen overflow-hidden">
    <div style="transform: translate(-{$translateX}vw, -{$translateY}vh)">
      <slot />
    </div>
  </div>
</main>
