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
  import { derived } from "svelte/store";

  export let url;

  const ONE_HUNDRED = 100; // TODO: convert to pixel measurements by window size?

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

  const { incrementRow, decrementRow, incrementCol, decrementCol } = LayoutStore;

  const actionButtonGroups = derived(LayoutStore, ($LayoutStore) => {
    return [
      [
        {
          id: "scrollLeft",
          text: "left",
          value: { x: $LayoutStore.x - 1, y: $LayoutStore.y },
          component: SolidCircleLeft,
          fn: decrementCol
        }
      ],
      [
        {
          id: "scrollUp",
          text: "up",
          value: { y: $LayoutStore.y - 1, x: $LayoutStore.x },
          component: SolidCircleUp,
          fn: decrementRow
        },
        {
          id: "scrollDown",
          text: "down",
          value: { y: $LayoutStore.y + 1, x: $LayoutStore.x },
          component: SolidCircleDown,
          fn: incrementRow
        }
      ],
      [
        {
          id: "scrollRight",
          text: "right",
          value: { x: $LayoutStore.x + 1, y: $LayoutStore.y },
          component: SolidCircleRight,
          fn: incrementCol
        }
      ]
    ];
  });
</script>

<!-- TODO: Add gesture support -->
<svelte:window bind:innerHeight={windowHeight} />
<Header {windowHeight} />

<main class="relative bg-black">
  <div class="absolute bottom-10 right-3" style:z-index={99999}>
    <div class="flex justify-end align-middle h-28">
      {#each $actionButtonGroups as buttonGroup}
        <div
          class="flex flex-col"
          class:justify-center={buttonGroup.length === 1}
          class:justify-between={buttonGroup.length > 1}
        >
          {#each buttonGroup as button}
            <button
              class="text-green-500 disabled:text-red-500 h-10 lowercase font-thin px-3 disabled:line-through"
              disabled={!ContentStore.cellExists(button.value)}
              on:click={button.fn}
            >
            <span>{button.text}</span>
            <!-- TODO: do we want this icon version? seems to bulky/bold rn
            <span class="sr-only">{button.text}</span>
              <svelte:component this={button.component} />-->
            </button> 
          {/each}
        </div>
      {/each}
    </div>
  </div>
  <div class="relative h-screen w-screen overflow-hidden">
    <div style="transform: translate(-{$translateX}vw, -{$translateY}vh)">
      <slot />
    </div>
  </div>
</main>
