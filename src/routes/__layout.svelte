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

  let slideNavHeight;
</script>

<svelte:window bind:innerHeight={windowHeight} bind:scrollY={yPos} />
<Header {windowHeight} />

<main class="relative bg-black" class:bg-white={$IntroStore.isShowing}>

  <slot />
</main>
