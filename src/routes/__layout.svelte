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

  import SolidCircleLeft from "$lib/icons/solidCircleLeft.svelte";
  import SolidCircleUp from "$lib/icons/solidCircleUp.svelte";
  import SolidCircleDown from "$lib/icons/solidCircleDown.svelte";
  import SolidCircleRight from "$lib/icons/solidCircleRight.svelte";
  import ContentStore from "$stores/ContentStore";
  export let url;

  const ONE_HUNDRED = 100; // TODO: convert to pixel measurements by window size?
  const ZERO = 0; // TODO: convert to pixel measurements by window size?

  let windowHeight;

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

  const { subscribe: subscribeToActiveCell } = LayoutStore;

  const translateY = spring(0);
  const translateX = spring(0);

  subscribeToActiveCell((cell) => {
    translateY.set(cell.y * ONE_HUNDRED); // uses relative vw/vh units for now
    translateX.set(cell.x * ONE_HUNDRED); // uses relative vw/vh units for now
  });

  const { incrementRow, decrementRow, incrementCol, decrementCol, existsInGrid } = LayoutStore;

  function scrollDown() {
    let updated = { y: $LayoutStore.y + 1, x: $LayoutStore.x };
    if (ContentStore.cellExists(updated)) incrementRow();
  }
  function scrollUp() {
    let updated = { y: $LayoutStore.y - 1, x: $LayoutStore.x };
    if (ContentStore.cellExists(updated)) decrementRow();
  }

  function scrollRight() {
    let updated = { x: $LayoutStore.x + 1, y: $LayoutStore.y };
    if (ContentStore.cellExists(updated)) incrementCol();
  }
  function scrollLeft() {
    let updated = { x: $LayoutStore.x - 1, y: $LayoutStore.y };
    if (ContentStore.cellExists(updated)) decrementCol();
  }
</script>

<!-- TODO: Add gesture support -->
<svelte:window bind:innerHeight={windowHeight} />
<Header {windowHeight} />

<main class="relative bg-black">
  <div class="fixed w-full flex flex-row bottom-0 justify-evenly" style:z-index={99999}>
    <button class="bg-blue-400 w-full h-10" on:click={scrollLeft}>
      <!-- left -->
      <SolidCircleLeft />
    </button>
    <button class="bg-red-400 w-full h-10" on:click={scrollUp}>
      <!-- up -->
      <SolidCircleUp />
    </button>
    <button class="bg-yellow-400 w-full h-10" on:click={scrollDown}>
      <!-- down -->
      <SolidCircleDown />
    </button>
    <button class="bg-green-400 w-full h-10" on:click={scrollRight}>
      <!-- right -->
      <SolidCircleRight />
    </button>
  </div>
  <div class="relative h-screen w-screen overflow-hidden">
    <div style="transform: translate(-{$translateX}vw, -{$translateY}vh)">
      <slot />
    </div>
  </div>
</main>
