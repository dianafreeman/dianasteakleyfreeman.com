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
  import IntroStore from "$stores/IntroStore";
  import LayoutStore from "$stores/LayoutStore";
  import { spring } from "svelte/motion";
  import { writable } from "svelte/store";
  
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

  
  const activeCell = writable();
  const { incrementRow, decrementRow, incrementCol, decrementCol, sections } = LayoutStore;

  const translateY = spring(0);
  const translateX = spring(0);
  let prevColItem// = grid[activeCell.x][activeCell.y]


  activeCell.subscribe((cell) => {
    // TODO: set translate variables as derived stores in the layout store
    translateY.set(cell.y * ONE_HUNDRED); // uses relative vw/vh units for now
    translateX.set(cell.x * ONE_HUNDRED); // uses relative vw/vh units for now
  });

  function scrollDown() {
    incrementRow();
  }
  function scrollUp() {
    decrementRow();
  }

  function scrollRight() {
    incrementCol();
  }
  function scrollLeft() {
    decrementCol();
  }

  
// previousItem={$SectionStore.slides[idx - 1]} nextItem={$SectionStore.slides[idx + 1]}
</script>
<!-- TODO: Add gesture support -->
<svelte:window bind:innerHeight={windowHeight} />
<Header {windowHeight} />

<main class="relative bg-black" class:bg-white={$IntroStore.isShowing}>
  <div
    class:invisible={$IntroStore.isShowing}
    class="fixed w-full flex flex-row bottom-0 justify-evenly"
    style:z-index={99999}
  >
<!-- 
{#if previousItem || nextItem}
  <div
    class="flex flex-row"
    class:justify-start={!nextItem}
    class:justify-end={!previousItem}
    class:justify-between={!!previousItem && !!nextItem}
  >
    {#if previousItem}
      <button on:click={decrementCol}>
        <SolidCircleLeft />
        {@html previousItem.title}
      </button>
    {/if}
    {#if nextItem}
      <button on:click={incrementCol}>
        {@html nextItem.title}
        <SolidCircleRight/>
      </button>
    {/if}
  </div>
{/if} -->

  <button class="bg-blue-400 w-full h-10" on:click={scrollLeft}>
    left
  </button>
    <button class="bg-red-400 w-full h-10" on:click={scrollUp}>
      up
    </button>
    <button class="bg-yellow-400 w-full h-10" on:click={scrollDown}>
      down
    </button>
    <button class="bg-green-400 w-full h-10" on:click={scrollRight}>
      right
    </button> 
  </div>
  <div class="relative h-screen w-screen overflow-hidden">
    <div style="transform: translate(-{$translateX}vw, -{$translateY}vh)">
      <slot />
    </div>
  </div>
</main>
