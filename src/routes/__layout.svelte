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

  import { navigating } from "$app/stores";

  // export let url;

  const ONE_HUNDRED = 100; // TODO: convert to pixel measurements by window size?

  let windowHeight;

  const { subscribe: subscribeToActiveCell } = LayoutStore;

  const translateY = spring(0);
  const translateX = spring(0);
  let activeCell, isTop, isBottom

  subscribeToActiveCell((cell) => {
    activeCell = cell
    translateY.set(cell.y * ONE_HUNDRED); // uses relative vw/vh units for now
    translateX.set(cell.x * ONE_HUNDRED); // uses relative vw/vh units for now
    isTop = cell.y === 0
    isBottom = cell.y === 2
  });

  
  $: $navigating && LayoutStore.setCell({x: 0, y: 0})
</script>

<!-- TODO: Add gesture support -->
<svelte:window bind:innerHeight={windowHeight} />
<Header {windowHeight} />

<main class="relative bg-black">
  <!-- TODO: set overflow-y-scroll based on the active section settings -->
  <div class="relative w-screen overflow-x-hidden h-screen overflow-y-hidden" >
    <div style="transform: translate(-{$translateX}vw, -{$translateY}vh)">
      <slot />
    </div>
  </div>
</main>
