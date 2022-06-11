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
  import IntroStore from "$stores/IntroStore";
  import { spring } from "svelte/motion";
  import { derived, writable } from "svelte/store";

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

  const activeCell = writable({ x: 0, y: 0 });

  const grid = [["landing"], ["coder", "creator", "communicator"], ["projects", "gallery", "blog"]];

  const rowMax = grid.length - 1;
  const minimum = ZERO;
  $: colMax = grid[$activeCell.y].length - 1;

  const translateY = spring(0);
  const translateX = spring(0);

  activeCell.subscribe((cell) => {
    translateY.set(cell.y * ONE_HUNDRED); // uses relative vw/vh units for now
    translateX.set(cell.x * ONE_HUNDRED); // uses relative vw/vh units for now
  });

  // function validate(event, value){
  //   switch (event){
  //     case "increment":
  //     if ($activeCell.y === rowMax) return;
  //   }
  // }
  function incrementRow() {
    if ($activeCell.y === rowMax) return;
    activeCell.update((cell) => ({ ...cell, y: cell.y + 1 }));
  }

  function decrementRow() {
    if ($activeCell.y === minimum) return;
    activeCell.update((cell) => ({ ...cell, y: cell.y - 1 }));
  }
  function incrementCol() {
    if ($activeCell.x === colMax) return;
    // if ($activeCell.x === maxiumum) return;
    activeCell.update((cell) => ({ ...cell, x: cell.x + 1 }));
  }

  function decrementCol() {
    if ($activeCell.x === minimum) return;
    activeCell.update((cell) => ({ ...cell, x: cell.x - 1 }));
  }

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

  // IN PROGRESS
  function scrollToY(y) {
    activeCell.update((cell) => ({ ...cell, y }));
  }
  function scrollToX(x) {
    activeCell.update((cell) => ({ ...cell, x }));
  }

  function scrollToCell(newValues) {
    const { x: newX, y: newY } = newValues;
    // if new X value is different
    if ($activeCell.x !== newX) {
      scrollToX(newX);
    }
    // if new y value is different
    if ($activeCell.y !== newY) {
      scrollToY(newY);
    }
  }

  // END IN PROGRESS
</script>

<svelte:window bind:innerHeight={windowHeight} />
<Header {windowHeight} />

<main class="relative bg-black" class:bg-white={$IntroStore.isShowing}>
  <div
    class:invisible={$IntroStore.isShowing}
    class="fixed w-full flex flex-row bottom-0 justify-evenly"
    style:z-index={99999}
  >
    <button class="bg-blue-400 w-full h-10" on:click={scrollLeft}>left</button>
    <button class="bg-red-400 w-full h-10" on:click={scrollUp}>up</button>
    <button class="bg-yellow-400 w-full h-10" on:click={scrollDown}>down</button>
    <button class="bg-green-400 w-full h-10" on:click={scrollRight}>right</button>
  </div>
  <div class="relative h-screen w-screen overflow-hidden">
    <div style="transform: translate(-{$translateX}vw, -{$translateY}vh)">
      <slot />
    </div>
  </div>
</main>
