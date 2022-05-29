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

  export let url;

  let windowHeight;

  onMount(() => {
    if (url.pathname == "/") {
      Intro.set({
        isShowing: true,
        isComplete: false
      });
    }
    Intro.setWindowHeight(windowHeight);
  });
</script>

<svelte:window bind:innerHeight={windowHeight} />
<Header {windowHeight}/>
<main class="relative bg-black ">
  <!-- <div id="spacer" class="h-36" /> -->
  <slot />
  <footer class="h-16 flex flex-row justify-center m-auto">
    <p class="p-4">Copyright 2022 | Diana M Steakley-Freeman</p>
  </footer>
</main>
